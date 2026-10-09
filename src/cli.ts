import { registryName } from './core/assess'
import type { Ecosystem } from './core/types'
import { check, describe, thresholdsOf } from './guard'
import { forgetAllowed, readAllowed, readConfig, readLog, world, writeAllowed } from './state'

const ECOSYSTEMS: readonly Ecosystem[] = ['npm', 'pypi', 'crates', 'rubygems']
/** What a registry accepts as a name: nothing that could reach outside the package's own address. */
const PACKAGE_NAME = /^(?:@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/i
const SHOWN_ENTRIES = 8

const USAGE = `Install Guard
  check <name>   look a package up (npm by default; pypi:<name>, crates:<name>, rubygems:<name>)
  allow <name>   always allow a package
  forget         clear the allowed list
  log            show what was checked lately`

const main = async (): Promise<string> => {
  const [verb = 'log', ...rest] = process.argv.slice(2)
  const named = rest.join(' ').trim()
  const [prefix, bare] = named.includes(':') ? [named.slice(0, named.indexOf(':')), named.slice(named.indexOf(':') + 1)] : ['npm', named]
  const ecosystem = ECOSYSTEMS.find(one => one === prefix) ?? 'npm'

  if (verb === 'forget') {
    await forgetAllowed()

    return 'Install Guard: the allowed list is empty again.'
  }

  if (verb === 'allow' || verb === 'check') {
    if (bare === '') {
      return `Install Guard: name a package, as in "${verb} left-pad" or "${verb} pypi:requests".`
    }

    if (!PACKAGE_NAME.test(bare)) {
      return `Install Guard: "${bare.slice(0, 80)}" is not a package name.`
    }
  }

  if (verb === 'allow') {
    await writeAllowed([...(await readAllowed()), `${ecosystem}:${bare.toLowerCase()}`])

    return `Install Guard: ${bare} (${registryName(ecosystem)}) is always allowed from now on.`
  }

  if (verb === 'check') {
    const [one] = await check(world(), [{ ecosystem, name: bare.toLowerCase(), version: null, via: 'check', isExecuted: false }], thresholdsOf(await readConfig()))

    return one === undefined ? 'Install Guard: nothing to check.' : describe(one, Date.now())
  }

  if (verb !== 'log') {
    return USAGE
  }

  const entries = (await readLog()).slice(-SHOWN_ENTRIES).reverse()
  const always = await readAllowed()
  const shown = entries.flatMap(entry => [`${entry.outcome === 'held' ? '! held' : '✓ nothing flagged'}  $ ${entry.command}`, ...entry.lines.flatMap(line => line.split('\n')).map(line => `    ${line}`), ''])

  return [
    ...(entries.length === 0 ? ['Nothing checked yet.', ''] : shown),
    always.length === 0 ? 'No package is always allowed.' : `Always allowed: ${always.map(one => one.slice(one.indexOf(':') + 1)).join(', ')}`,
  ].join('\n')
}

main().then(
  said => console.log(said),
  () => console.log('Install Guard: that did not work.'),
)
