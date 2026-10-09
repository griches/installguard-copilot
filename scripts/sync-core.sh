#!/bin/sh
# Copies the detection core from the Claude Code mod, which is where it is written.
# Usage: scripts/sync-core.sh [path to the installguard repo]
set -e
here=$(cd "$(dirname "$0")/.." && pwd)
from=${1:-"$here/../installguard"}

for name in detect shell assess registry popular; do
  sed -e "s#from '../types'#from './types'#" "$from/hooks/$name.ts" > "$here/src/core/$name.ts"
done

awk '/^declare module/{exit} {print}' "$from/types/index.d.ts" > "$here/src/core/types.ts"
sed -e "s#from 'claude-code/testing'#from 'bun:test'#" -e "s#'../hooks/#'../src/core/#g" -e "s#from '../types'#from '../src/core/types'#" "$from/tests/unit.test.ts" > "$here/tests/core.test.ts"
cp "$from/tests/fixtures.ts" "$here/tests/fixtures.ts"
echo "core synced from $(git -C "$from" rev-parse --short HEAD 2>/dev/null || echo "$from")"
