import { assess, compact, registryName, summary } from './core/assess'
import type { Thresholds } from './core/assess'
import { findInstalls } from './core/detect'
import { lookup } from './core/registry'
import type { Get } from './core/registry'
import type { Checked, Flag, Oddity, Request } from './core/types'

export type Config = {
  /** `flagged`: only a flagged command is held. `always`: every command that adds a new package. */
  hold: 'flagged' | 'always'
  sensitivity: 'relaxed' | 'balanced' | 'strict'
  /** Whether a registry that cannot be reached holds the command. */
  unreachable: 'allow' | 'hold'
  /** What a held command gets: Copilot's approval prompt, or a refusal. */
  onHold: 'ask' | 'deny'
}

export const DEFAULTS: Config = { hold: 'flagged', sensitivity: 'balanced', unreachable: 'allow', onHold: 'ask' }

/** Everything the guard touches outside itself, so a test can stand in for all of it. */
export type World = {
  get: Get
  now: () => number
  /** A file's text, or '' when it cannot be read. */
  read: (path: string) => Promise<string>
  exists: (path: string) => Promise<boolean>
  /** `ecosystem:name` of every package the person chose to always allow. */
  allowed: () => Promise<readonly string[]>
  /** Settles after the time the lookups are given, so a slow registry cannot run the hook out of time. */
  deadline: () => Promise<void>
}

export type Verdict =
  /** The command fetches nothing new. */
  | { kind: 'pass' }
  /** New packages were looked up and nothing was flagged. */
  | { kind: 'checked'; packages: Checked[] }
  | { kind: 'held'; reason: string; packages: Checked[]; oddities: Oddity[] }

const MOST_PACKAGES = 12
const SENSITIVITY: Record<Config['sensitivity'], Omit<Thresholds, 'holdsUnchecked'>> = {
  relaxed: { minAgeDays: 7, cooldownDays: 1, minWeeklyDownloads: 100 },
  balanced: { minAgeDays: 30, cooldownDays: 3, minWeeklyDownloads: 1000 },
  strict: { minAgeDays: 90, cooldownDays: 7, minWeeklyDownloads: 10_000 },
}
const ODDITY: Record<Oddity['kind'], (detail: string) => string> = {
  'pipe-to-shell': detail => `runs a script downloaded from ${detail} without showing it`,
  'remote-source': detail => `installs from ${detail}, which no registry vouches for`,
  tap: detail => `installs from the third-party tap ${detail}`,
  unreadable: detail => `names its package through a shell variable, so \`${detail}\` could not be checked`,
}

export const keyOf = (one: Pick<Request, 'ecosystem' | 'name'>) => `${one.ecosystem}:${one.name}`

export const thresholdsOf = (config: Config): Thresholds => ({ ...SENSITIVITY[config.sensitivity], holdsUnchecked: config.unreachable === 'hold' })

const isRisky = (one: Checked) => one.flags.some(flag => flag.level === 'risk')

const titled = (one: Request) => (one.version === null ? one.name : `${one.name}@${one.version}`)

const told = (flag: Flag) => `${flag.label.toLowerCase()}, ${flag.text}`

const reasons = (packages: readonly Checked[], oddities: readonly Oddity[]) => [
  ...packages.filter(isRisky).map(one => `${titled(one)} (${registryName(one.ecosystem)}): ${one.flags.filter(flag => flag.level === 'risk').map(told).join('; ')}`),
  ...oddities.map(one => `${one.via} ${ODDITY[one.kind](one.detail)}`),
]

const pypiName = (name: string) => name.toLowerCase().replace(/[-_.]+/g, '-')

/** The lines of a TOML file that stand under a table whose header matches. */
const tables = (toml: string, header: RegExp) => {
  const lines: string[] = []
  let isInside = false

  for (const line of toml.split('\n').map(one => one.trim())) {
    if (line.startsWith('[')) {
      isInside = header.test(line)
    } else if (isInside && line !== '' && !line.startsWith('#')) {
      lines.push(line)
    }
  }

  return lines
}

/** The names a project already depends on, read from its own manifests: asking for one of them again is no news. */
const declared = async (world: World, cwd: string): Promise<Set<string>> => {
  const names = new Set<string>()
  const [manifest, requirements, pyproject, cargo, gemfile] = await Promise.all(
    ['package.json', 'requirements.txt', 'pyproject.toml', 'Cargo.toml', 'Gemfile'].map(name => world.read(`${cwd}/${name}`)),
  )

  try {
    const parsed = JSON.parse(manifest ?? '') as Record<string, Record<string, string> | undefined>

    for (const group of ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies']) {
      Object.keys(parsed[group] ?? {}).forEach(name => names.add(`npm:${name.toLowerCase()}`))
    }
  } catch {
    // no package.json, or not JSON
  }

  for (const found of (requirements ?? '').matchAll(/^\s*([A-Za-z0-9][A-Za-z0-9._-]*)\s*(?:\[[^\]]*\])?\s*(?:[=~<>!;#]|$)/gm)) {
    names.add(`pypi:${pypiName(found[1] ?? '')}`)
  }

  // PEP 621 lists requirements as strings; Poetry keys them under its own tables.
  for (const block of (pyproject ?? '').matchAll(/dependencies\s*=\s*\[([^\]]*)\]/g)) {
    for (const found of (block[1] ?? '').matchAll(/["']\s*([A-Za-z0-9][A-Za-z0-9._-]*)/g)) {
      names.add(`pypi:${pypiName(found[1] ?? '')}`)
    }
  }

  for (const line of tables(pyproject ?? '', /^\[tool\.poetry\.(?:group\.[\w-]+\.)?(?:dev-)?dependencies\]$/)) {
    names.add(`pypi:${pypiName(/^([A-Za-z0-9][A-Za-z0-9._-]*)\s*=/.exec(line)?.[1] ?? '')}`)
  }

  for (const line of tables(cargo ?? '', /^\[(?:workspace\.)?(?:dev-|build-)?dependencies\]$/)) {
    names.add(`crates:${(/^([A-Za-z0-9][A-Za-z0-9_-]*)\s*=/.exec(line)?.[1] ?? '').toLowerCase()}`)
  }

  for (const found of (gemfile ?? '').matchAll(/^\s*gem\s+["']([^"']+)["']/gm)) {
    names.add(`rubygems:${(found[1] ?? '').toLowerCase()}`)
  }

  return names
}

/** What each package's registry says of it, and what about that is worth a look. */
export const check = async (world: World, requests: readonly Request[], thresholds: Thresholds): Promise<Checked[]> => {
  const at = world.now()

  return Promise.all(
    requests.map(async request => {
      const facts = await lookup(world.get, request)
      const flags = assess(request, facts, thresholds, at)
      // A deprecated package that is about to be run, not only stored, is worth a look.
      const raised = flags.map(flag => (flag.kind === 'deprecated' && request.isExecuted ? { ...flag, level: 'risk' as const } : flag))
      const near = raised.find(flag => flag.near !== undefined)?.near

      if (near === undefined) {
        return { ...request, facts, flags: raised, lookalike: null }
      }

      // The package it looks like is asked about too, so both can be told apart.
      const known = await lookup(world.get, { ...request, name: near, version: null })
      const weekly = known.isFound ? known.weeklyDownloads : null
      const used = weekly === null ? '' : ` (${compact(weekly)} downloads a week)`

      return {
        ...request,
        facts,
        flags: raised.map(flag => (flag.kind === 'typosquat' ? { ...flag, text: `looks like ${near}${used}, which is a different package` } : flag)),
        lookalike: { name: near, weeklyDownloads: weekly },
      }
    }),
  )
}

/** True when a command would change the guard's own allowed list, which only the person may do. */
export const touchesAllowed = (text: string) => /installguard/i.test(text) && /allowed\.json|cli\.mjs["']?\s+allow\b/.test(text)

export const ALLOWED_IS_YOURS = 'Install Guard held this: it changes the list of packages that are always allowed, which is yours to change.'
const HOW_TO_ALLOW = 'To stop being asked about a package you trust, run /installguard allow <name>.'

const holding = (why: string, config: Config) =>
  config.onHold === 'deny'
    ? `Install Guard refused this command: ${why}. Do not retry it or reach the same package another way unless the user asks you to; say what was flagged and offer an established alternative if there is one.`
    : `Install Guard held this command: ${why}. ${HOW_TO_ALLOW}`

/** Whether a shell command may run as it stands, and if not, why. */
export const judge = async (world: World, config: Config, command: string, cwd: string): Promise<Verdict> => {
  if (touchesAllowed(command)) {
    return { kind: 'held', reason: ALLOWED_IS_YOURS, packages: [], oddities: [] }
  }

  const found = findInstalls(command)

  if (found.requests.length === 0 && found.oddities.length === 0) {
    return { kind: 'pass' }
  }

  const [known, trusted] = await Promise.all([declared(world, cwd), world.allowed()])
  const isLocal = async (one: Request) => one.isExecuted && one.ecosystem === 'npm' && cwd !== '' && (await world.exists(`${cwd}/node_modules/.bin/${one.name}`))
  const fresh: Request[] = []

  for (const one of found.requests) {
    if (!trusted.includes(keyOf(one)) && !known.has(keyOf(one)) && !(await isLocal(one))) {
      fresh.push(one)
    }
  }

  if (fresh.length === 0 && found.oddities.length === 0) {
    return { kind: 'pass' }
  }

  const packages = await Promise.race([check(world, fresh.slice(0, MOST_PACKAGES), thresholdsOf(config)), world.deadline().then(() => null)])

  // A hook that runs out of time lets the command through, so a slow registry is answered here instead.
  if (packages === null) {
    const names = fresh.map(titled).join(', ')

    return { kind: 'held', reason: holding(`the registries did not answer in time, so ${names || 'it'} could not be checked`, config), packages: [], oddities: found.oddities }
  }

  const mustHold = config.hold === 'always' || found.oddities.length > 0 || packages.some(isRisky) || fresh.length > MOST_PACKAGES

  if (!mustHold) {
    return { kind: 'checked', packages }
  }

  const flagged = [
    ...reasons(packages, found.oddities),
    ...(fresh.length > MOST_PACKAGES ? [`it names ${fresh.length} new packages at once, more than are checked in one go`] : []),
  ]
  const why = flagged.length === 0 ? `it adds ${fresh.map(titled).join(', ')}, which this project does not have yet` : flagged.join(' | ')

  return { kind: 'held', reason: holding(why, config), packages, oddities: found.oddities }
}

/** `express 5.2.1 · 11 years old · 169M a week`, then anything flagged about it. */
export const describe = (one: Checked, at: number) => {
  const head = `${one.facts.isFound ? summary(one, one.facts, at) : titled(one)} (${registryName(one.ecosystem)})`
  const flags = one.flags.length === 0 ? ['nothing flagged'] : one.flags.map(flag => `${flag.level === 'risk' ? '!' : '·'} ${flag.label}: ${flag.text}`)

  return [head, ...flags.map(line => `  ${line}`)].join('\n')
}
