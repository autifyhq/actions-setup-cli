import {arch, platform} from 'node:process'

export const getTarget = (): string => {
  switch (platform) {
    case 'linux': {
      if (arch === 'x64') return 'linux-x64.tar.gz'
      if (arch === 'arm' || arch === 'arm64') return 'linux-arm.tar.gz'
      break
    }

    case 'darwin': {
      if (arch === 'x64') return 'darwin-x64.tar.gz'
      if (arch === 'arm64') return 'darwin-arm64.tar.gz'
      break
    }

    case 'win32': {
      if (arch === 'x64') return 'x64.exe'
      if (arch === 'ia32') return 'x86.exe'
      break
    }
  }
  throw new Error(`Unsupported environment: ${platform} ${arch}`)
}
