import * as core from '@actions/core'
import {getTarget} from './target-util'
import {downloadAndExtract} from './download-util'
import {install} from './install-util'

async function run(): Promise<void> {
  try {
    const version = core.getInput('version')
    const target = getTarget()
    const extractPath = await downloadAndExtract(target, version)
    install(extractPath)
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
