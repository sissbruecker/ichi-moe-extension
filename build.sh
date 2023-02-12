#!/usr/bin/env bash

rm -rf web-ext-artifacts

# Lint extension, while excluding dev files
npx web-ext lint --ignore-files .idea web-ext-artifacts .gitignore *.sh *.iml *.lock
# Build extension, while excluding dev files
npx web-ext build --overwrite-dest --ignore-files .idea web-ext-artifacts .gitignore *.sh *.iml *.lock

echo "✅ Done"
