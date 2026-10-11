#!/usr/bin/env bash
# Builds the newsletter stills: assembles the staffer-motion-kit into scenes/*.tsx, injects the extra
# icons, copies persona photos, and writes stills.html. Then serve this folder and run shoot.sh.
set -e
D="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$D/img" "$D/out"
cp ~/Desktop/video/role-films/digg-lagunen-medarbeider/img/{emily,erik,lena,max,sam,sara}.png "$D/img/"
node ~/.claude/skills/staffer-motion-kit/scripts/assemble.mjs "$D" >/dev/null
for f in "$D"/build/*.tsx; do
  node -e 'const fs=require("fs");const f=process.argv[1];const x=fs.readFileSync(process.argv[2],"utf8");fs.writeFileSync(f,fs.readFileSync(f,"utf8").replace(/^[ \t]*\/\/ @icons[ \t]*$/m,x.replace(/\s+$/,"")));' "$f" "$D/icons-extra.jsx"
done
node "$D/stills.mjs" "$D"
