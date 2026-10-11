#!/usr/bin/env bash
# shoot.sh <graphic> <out.png> [w] [h]  — needs `python3 -m http.server 8781` running in this folder
G="$1"; OUT="$2"; W="${3:-1200}"; H="${4:-675}"; WORK=$(mktemp -d)
rm -f "$OUT"
( "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
  --user-data-dir="$WORK/profile" --force-device-scale-factor=1 --window-size=$W,$H \
  --virtual-time-budget=8000 --screenshot="$OUT" "http://127.0.0.1:8781/stills.html?g=$G&w=$W&h=$H&t=99" >/dev/null 2>&1 & )
for i in $(seq 1 60); do [ -s "$OUT" ] && break; sleep 0.5; done
sleep 1; pkill -f "$WORK/profile" 2>/dev/null || true
[ -s "$OUT" ] && echo "ok $OUT" || echo "FAILED $OUT"
