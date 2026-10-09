import { findInstalls } from './core/detect'
import { ALLOWED_IS_YOURS, describe, judge, touchesAllowed } from './guard'
import type { Verdict } from './guard'
import { readConfig, record, world } from './state'

type Json = Record<string, unknown>

const object = (value: unknown): Json => {
  if (typeof value === 'string') {
    try {
      return object(JSON.parse(value))
    } catch {
      return {}
    }
  }

  return typeof value === 'object' && value !== null && !Array.isArray(value) ? (value as Json) : {}
}

const stdin = async () => {
  const chunks: Buffer[] = []

  for await (const chunk of process.stdin) {
    chunks.push(chunk as Buffer)
  }

  return Buffer.concat(chunks).toString('utf8')
}

/** Copilot's own answer shape, or the Claude-style one when the hook was configured as `PreToolUse`. */
const answer = (payload: Json, decision: 'ask' | 'deny', reason: string) =>
  JSON.stringify(
    'hook_event_name' in payload
      ? { hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: decision, permissionDecisionReason: reason } }
      : { permissionDecision: decision, permissionDecisionReason: reason },
  )

const main = async () => {
  const payload = object(await stdin())
  const args = object(payload.toolArgs ?? payload.tool_input)
  const command = typeof args.command === 'string' ? args.command : null
  const cwd = typeof payload.cwd === 'string' ? payload.cwd : ''

  // A tool that runs no command is of interest only if it would write the allowed list itself.
  if (command === null) {
    if (touchesAllowed(JSON.stringify(args))) {
      process.stdout.write(answer(payload, 'ask', ALLOWED_IS_YOURS))
    }

    return
  }

  let verdict: Verdict
  const config = await readConfig()

  try {
    verdict = await judge(world(), config, command, cwd)
  } catch {
    // The guard failed: a command that fetches nothing new goes on, one that does waits for the person.
    const found = findInstalls(command)

    if (found.requests.length > 0 || found.oddities.length > 0) {
      process.stdout.write(answer(payload, 'ask', 'Install Guard failed while checking this command, so nothing about its packages is known.'))
    }

    return
  }

  if (verdict.kind === 'pass') {
    return
  }

  const at = Date.now()
  await record({
    at,
    outcome: verdict.kind === 'held' ? 'held' : 'passed',
    command: command.replace(/\s+/g, ' ').slice(0, 200),
    lines: verdict.kind === 'held' && verdict.packages.length === 0 ? [verdict.reason] : verdict.packages.map(one => describe(one, at)),
  })

  // A command with nothing flagged gets no answer at all, so Copilot's own approval still applies to it.
  if (verdict.kind === 'held') {
    process.stdout.write(answer(payload, verdict.reason === ALLOWED_IS_YOURS ? 'ask' : config.onHold, verdict.reason))
  }
}

// Any exit but zero refuses the tool call, so whatever goes wrong here ends quietly.
main()
  .catch(() => undefined)
  .finally(() => process.exit(0))
