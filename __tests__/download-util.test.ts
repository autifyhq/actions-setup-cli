import {downloadAndExtract} from '../src/download-util'
import {expect, test, beforeAll} from '@jest/globals'

test.each([
  ['linux-x64', undefined],
  ['linux-x64', '0.1.0']
])(
  'downloadAndExtract target=%s version=%s',
  async (target, version) => {
    expect(await downloadAndExtract(target, version)).toBeDefined()
  },
  60_000
)
