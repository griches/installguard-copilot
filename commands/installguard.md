---
description: "Show what Install Guard checked, look a package up (check <name>), always allow one (allow <name>) or clear the allowed list (forget)"
argument-hint: "[check|allow <package>] [forget]"
allowed-tools: Bash
---

# Install Guard

Run Install Guard's own program, followed by the words the user typed after `/installguard` (for example `check express`, `allow left-pad`, `forget`), and nothing else:

```bash
node "$(cat "${COPILOT_HOME:-$HOME/.copilot}/installguard/root")/dist/cli.mjs" <the user's words>
```

The user's words: $ARGUMENTS

With no words it shows what was checked lately. Show the user its output as it is, without adding to it.

Run it only when the user asks through this command. Never run `allow` on your own to get a held install through: the allowed list is the user's to change.
