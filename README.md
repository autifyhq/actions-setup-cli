<p align="center">
  <a href="https://github.com/autifyhq/actions-setup-cli"><img alt="actions-setup-cli status" src="https://github.com/autifyhq/actions-setup-cli/workflows/build-test/badge.svg"></a>
</p>

# Setup Autify Command Line Interface (CLI)

This action setup [Autify Command Line Interface (CLI)](https://github.com/autifyhq/autify-cli) so that your workflow can run `autify` command.

The installed directory will be added to `PATH` environment variable of your workflow.

## Usage

```yaml
- uses: autifyhq/actions-setup-cli@v2

# Then, `autify` is available
- run: autify --version
```

### Options

Most of the case, no options are needed. When you need more customization, here is the list:

```yaml
shell-installer-url:
  required: false
  description: "Shell installer URL"
  # TODO: Use stable
  default: "https://autify-cli-assets.s3.amazonaws.com/autify-cli/channels/beta/install-cicd.bash"
use-cache:
  required: false
  description: "Use cached CLI installed by previous steps if existing."
  default: "false"
install-cli-integration-test:
  required: false
  description: "Install autify-cli-integration-test package as well."
  default: "false"
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
