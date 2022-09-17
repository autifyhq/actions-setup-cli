#!/usr/bin/env bash
set -xe

: "${INPUT_SHELL_INSTALLER_URL:?"Provide the installer URL"}"
: "${INPUT_USE_CACHE:?"Provide true or false"}"
: "${INPUT_INSTALL_CLI_INTEGRATION_TEST:?"Provide true or false"}"

if [ "$INPUT_USE_CACHE" == "true" ]; then
  export AUTIFY_CLI_INSTALL_USE_CACHE=1
fi
if [ "$INPUT_INSTALL_CLI_INTEGRATION_TEST" == "true" ]; then
  export AUTIFY_CLI_INTEGRATION_TEST_INSTALL=1
fi

cd "$RUNNER_TEMP"
curl -L "$INPUT_SHELL_INSTALLER_URL" | bash -xe

cat "$RUNNER_TEMP/autify/path" >> "$GITHUB_PATH"
