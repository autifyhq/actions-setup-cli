#!/usr/bin/env bash
set -xe

: "${INPUT_SHELL_INSTALLER_URL:?"Provide the installer URL"}"

TEMP_DIR=$(mktemp -d)

cd "$TEMP_DIR"
curl -L "$INPUT_SHELL_INSTALLER_URL" | bash -xe

BIN_DIR="$TEMP_DIR/autify/bin"
"$BIN_DIR"/autify --version

if [ "$(command -v cygpath)" ]; then
  cygpath -w "$BIN_DIR" >> "$GITHUB_PATH"
else
  echo "$BIN_DIR" >> "$GITHUB_PATH"
fi
