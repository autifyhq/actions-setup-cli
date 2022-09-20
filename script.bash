#!/usr/bin/env bash
set -xe

: "${INPUT_SHELL_INSTALLER_URL:?"Provide the installer URL"}"

cd "$RUNNER_TEMP"
export AUTIFY_CLI_INSTALL_USE_CACHE=1
curl -L "$INPUT_SHELL_INSTALLER_URL" | bash -xe

while IFS= read -r line; do
  if [ "$(command -v cygpath)" ]; then
    cygpath -w "$line" >> "$GITHUB_PATH"
  else
    echo "$line" >> "$GITHUB_PATH"
  fi
done < "$RUNNER_TEMP/autify/path"
