import * as tc from '@actions/tool-cache'
import {readFile} from 'node:fs/promises'

const bucket = 'autify-cli-assets'
const folder = 'autify-cli'

type Versions = Record<string, string>

const urlFromIndex = async (
  target: string,
  version: string
): Promise<string> => {
  const key = `${folder}/versions/autify-${target.replace(/\./g, '-')}.json`
  const indexUrl = `https://${bucket}.s3.amazonaws.com/${key}`
  const indexFile = await tc.downloadTool(indexUrl)
  const versions = JSON.parse(
    (await readFile(indexFile)).toString()
  ) as Versions
  const url = versions[version]
  if (!url) throw new Error(`Can't find version ${version}`)
  return url
}

const urlFromStable = (target: string): string => {
  const key = `${folder}/channels/stable/autify-${target}`
  return `https://${bucket}.s3.amazonaws.com/${key}`
}

export const download = async (
  target: string,
  version?: string
): Promise<string> => {
  let url: string
  if (version) {
    url = await urlFromIndex(target, version)
  } else {
    url = urlFromStable(target)
  }
  return tc.downloadTool(url)
}
