<p align="center">
  <a href="https://github.com/autifyhq/actions-setup-cli"><img alt="actions-setup-cli status" src="https://github.com/autifyhq/actions-setup-cli/workflows/build-test/badge.svg"></a>
</p>

# Setup Autify Command Line Interface (CLI)

This action setup [Autify Command Line Interface (CLI)](https://github.com/autifyhq/autify-cli) so that your workflow can run `autify` command.

The installed directly will be added to `PATH` environment variable of your workflow.

## Usage

```yaml
- uses: autifyhq/actions-setup-cli@v1
  with:
    # Optional. If specified, the action installs the specific version of Autify CLI.
    # Default: The latest version of the stable channel will be installed.
    version: ''

# Then, `autify` is available
- run: autify --version
```
