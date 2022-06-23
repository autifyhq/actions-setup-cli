const os = require('os')

beforeAll(() => {
  process.env.RUNNER_TEMP ??= os.tmpdir()
})
