import * as core from '@actions/core'
import path from 'node:path'
import {symlink, mkdir} from 'fs/promises'

export const install = async (extractPath: string): Promise<void> => {
  const autifyCommand = 'autify'
  const autifyPath = path.join(extractPath, 'autify', 'bin', autifyCommand)
  const installBinPath = path.join(extractPath, 'bin')
  const installAutifyPath = path.join(installBinPath, autifyCommand)
  await mkdir(installBinPath)
  await symlink(autifyPath, installAutifyPath)
  core.addPath(installBinPath)
}
