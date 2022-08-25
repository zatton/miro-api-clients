#!/usr/bin/env bash
set -euo pipefail

file=packages/typescript-node/api/apis.ts
tmpfile=_newapi.ts

awk '/import/ { if (!a[$0]++) print $0 } !/import/ { print $0}' "$file" > "$tmpfile"
mv "$tmpfile" "$file"
