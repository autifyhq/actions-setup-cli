import {download} from '../src/download-util'
import {expect, test, beforeAll} from '@jest/globals'

test.each([
  ['linux-x64.tar.gz', undefined],
  ['linux-x64.tar.gz', '0.1.0'],
  ['x64.exe', undefined]
])(
  'downloadAndExtract target=%s version=%s',
  async (target, version) => {
    expect(await download(target, version)).toBeDefined()
  },
  60_000
)
