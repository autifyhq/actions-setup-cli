<p align="center">
  <a href="https://github.com/autifyhq/actions-setup-cli"><img alt="actions-setup-cli status" src="https://github.com/autifyhq/actions-setup-cli/workflows/build-test/badge.svg"></a>
</p>

# Setup Autify Command Line Interface (CLI)

This action setup [Autify Command Line Interface (CLI)](https://github.com/autifyhq/autify-cli) so that your workflow can run `autify` command.

The installed directory will be added to `PATH` environment variable of your workflow.

## Usage

```yaml
- uses: autifyhq/actions-setup-cli@v2
  # Optionally specify the installer script which installs `autify` at `./autify/bin`.
  # If omitted, the default installer will be used. (Currently stable channel)
  shell-installer-url: "https://autify-cli-assets.s3.amazonaws.com/autify-cli/channels/beta/install-cicd.bash"

# Then, `autify` is available
- run: autify --version
```

### v1

**NOTE: v1 is no longer maintained. Please migrate to v2.**

```yaml
- uses: autifyhq/actions-setup-cli@v1
  with:
    # Optional. If specified, the action installs the specific version of Autify CLI.
    # Default: The latest version of the stable channel will be installed. (Recommended)
    version: ""

# Then, `autify` is available
- run: autify --version
```
