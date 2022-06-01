import {arch, platform} from 'node:process'

export const getTarget = (): string => {
  switch (platform) {
    case 'linux': {
      if (arch === 'x64') return 'linux-x64'
      if (arch === 'arm' || arch === 'arm64') return 'linux-arm'
      break
    }

    case 'darwin': {
      if (arch === 'x64') return 'darwin-x64'
      if (arch === 'arm64') return 'darwin-arm64'
      break
    }

    case 'win32': {
      if (arch === 'x64') return 'win32-x64'
      if (arch === 'ia32') return 'win32-x86'
      break
    }
  }
  throw new Error(`Unsupported environment: ${platform} ${arch}`)
}
