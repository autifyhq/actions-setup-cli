import * as core from '@actions/core'
import {getTarget} from './target-util'
import {download} from './download-util'
import {install} from './install-util'

async function run(): Promise<void> {
  try {
    const version = core.getInput('version')
    const target = getTarget()
    const downloadPath = await download(target, version)
    install(downloadPath)
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
