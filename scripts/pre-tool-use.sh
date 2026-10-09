#!/bin/sh
# Install Guard: runs before every Copilot tool call and answers only for a command worth holding.
# Any exit but zero would refuse the tool call, so every path out of here is exit 0.

input=$(cat)

# Only a tool that runs a command, or one that names the guard's own files, is worth starting node for.
case "$input" in
  *'"command"'* | *installguard*) ;;
  *) exit 0 ;;
esac

# Without node the guard cannot check anything; the command goes on to Copilot's own approval.
command -v node >/dev/null 2>&1 || exit 0

root=$(cd "$(dirname "$0")/.." && pwd)
printf '%s' "$input" | node "$root/dist/hook.mjs"
exit 0
