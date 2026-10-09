#!/bin/sh
# Install Guard: notes where the plugin is installed, so /installguard can find its own program.

home="${COPILOT_HOME:-$HOME/.copilot}/installguard"
root=$(cd "$(dirname "$0")/.." && pwd)

mkdir -p "$home" 2>/dev/null && printf '%s\n' "$root" > "$home/root" 2>/dev/null
exit 0
