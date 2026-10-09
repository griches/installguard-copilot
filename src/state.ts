import { appendFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'

import type { Get } from './core/registry'
import { DEFAULTS } from './guard'
import type { Config, World } from './guard'

/** Each hook call is a new process, so what the guard remembers is kept in files here. */
export const home = () => join(process.env.COPILOT_HOME ?? join(homedir(), '.copilot'), 'installguard')

const ALLOWED = 'allowed.json'
const CONFIG = 'config.json'
const LOG = 'log.jsonl'
const KEPT_ENTRIES = 200
const USER_AGENT = 'installguard-copilot (https://github.com/griches/installguard-copilot)'
/** The only hosts ever asked, and all they are sent is a package's name in the address. */
const HOSTS = ['registry.npmjs.org', 'api.npmjs.org', 'pypi.org', 'pypistats.org', 'crates.io', 'rubygems.org', 'api.deps.dev']
const REQUEST_MS = 6000
/** Under the thirty seconds hooks.json gives the hook, with room left to answer. */
const BUDGET_MS = 20_000

const text = (path: string) => readFile(path, 'utf8').catch(() => '')

const oneOf = <T extends string>(value: unknown, options: readonly T[], fallback: T) => options.find(one => one === value) ?? fallback

export const readAllowed = async (): Promise<string[]> => {
  try {
    const kept: unknown = JSON.parse(await text(join(home(), ALLOWED)))

    return Array.isArray(kept) ? kept.filter(one => typeof one === 'string') : []
  } catch {
    return []
  }
}

export const writeAllowed = async (keys: readonly string[]) => {
  await mkdir(home(), { recursive: true })
  await writeFile(join(home(), ALLOWED), `${JSON.stringify([...new Set(keys)].sort(), null, 2)}\n`)
}

export const forgetAllowed = () => rm(join(home(), ALLOWED), { force: true })

export const readConfig = async (): Promise<Config> => {
  let kept: Record<string, unknown> = {}

  try {
    kept = JSON.parse(await text(join(home(), CONFIG))) as Record<string, unknown>
  } catch {
    // no config, or not JSON: the defaults stand
  }

  return {
    hold: oneOf(kept.hold, ['flagged', 'always'], DEFAULTS.hold),
    sensitivity: oneOf(kept.sensitivity, ['relaxed', 'balanced', 'strict'], DEFAULTS.sensitivity),
    unreachable: oneOf(kept.unreachable, ['allow', 'hold'], DEFAULTS.unreachable),
    onHold: oneOf(kept.onHold, ['ask', 'deny'], DEFAULTS.onHold),
  }
}

export type Logged = { at: number; outcome: 'passed' | 'held'; command: string; lines: string[] }

export const record = async (entry: Logged) => {
  try {
    await mkdir(home(), { recursive: true })
    await appendFile(join(home(), LOG), `${JSON.stringify(entry)}\n`)
    const lines = (await text(join(home(), LOG))).split('\n').filter(line => line !== '')

    if (lines.length > KEPT_ENTRIES * 2) {
      await writeFile(join(home(), LOG), `${lines.slice(-KEPT_ENTRIES).join('\n')}\n`)
    }
  } catch {
    // the log is a convenience: a command is never held up over it
  }
}

export const readLog = async (): Promise<Logged[]> =>
  (await text(join(home(), LOG)))
    .split('\n')
    .filter(line => line !== '')
    .flatMap(line => {
      try {
        return [JSON.parse(line) as Logged]
      } catch {
        return []
      }
    })

const get: Get = async url => {
  try {
    if (!HOSTS.includes(new URL(url).host)) {
      return null
    }

    const answered = await fetch(url, { headers: { 'user-agent': USER_AGENT, accept: 'application/json' }, signal: AbortSignal.timeout(REQUEST_MS) })

    return { status: answered.status, text: await answered.text() }
  } catch {
    return null
  }
}

export const world = (): World => ({
  get,
  now: () => Date.now(),
  read: text,
  exists: path => readFile(path).then(() => true, () => false),
  allowed: readAllowed,
  deadline: () => new Promise(resolve => setTimeout(resolve, BUDGET_MS).unref()),
})
