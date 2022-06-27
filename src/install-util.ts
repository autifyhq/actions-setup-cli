import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import path from 'node:path'
import {platform} from 'node:process'
import {symlink, mkdir} from 'fs/promises'
import {homedir} from 'node:os'
import {execSync} from 'node:child_process'
import {renameSync} from 'node:fs'

const installTarGz = async (downloadPath: string): Promise<void> => {
  const extractPath = await tc.extractTar(downloadPath)
  const autifyCommand = 'autify'
  const autifyPath = path.join(extractPath, 'autify', 'bin', autifyCommand)
  const installBinPath = path.join(extractPath, 'bin')
  const installAutifyPath = path.join(installBinPath, autifyCommand)
  await mkdir(installBinPath)
  await symlink(autifyPath, installAutifyPath)
  core.addPath(installBinPath)
}

const installExe = async (downloadPath: string): Promise<void> => {
  const exePath = `${downloadPath}.exe`
  renameSync(downloadPath, exePath)
  const installPath = path.join(homedir(), 'autify')
  execSync(`${exePath} /S /D=${installPath}`)
  const installBinPath = path.join(installPath, 'bin')
  core.addPath(installBinPath)
}

export const install = async (downloadPath: string): Promise<void> => {
  if (platform === 'linux') return installTarGz(downloadPath)
  if (platform === 'darwin') return installTarGz(downloadPath)
  if (platform === 'win32') return installExe(downloadPath)
}
