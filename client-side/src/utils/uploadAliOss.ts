import * as OSS from "ali-oss";
import { Md5 } from "ts-md5";

// todo secret
const OSS_CONFIG = {
  "accessid": "",
  "bucket": "",
  "secretKey": "",
  "host": "",
  "region": "",
}
export const KEY = 'filename' // 原文件名

/**
 * @description 生成md5文件名
 * @param raw
 */
const fileNameGenerator = (raw: string): string => {
  const pos = raw.lastIndexOf('.')
  let suffix = ''
  if (pos !== -1) {
    suffix = raw.substring(pos)
  }
  let output = ''
  let timestamp = new Date().getTime().toString()
  timestamp += Math.random().toString(36).substr(2, 6)
  timestamp += suffix
  output = (Md5.hashStr(timestamp) as string).substr(0, 20)

  if (suffix) {
    output += suffix
  }
  return output
}


/**
 * @description 上传阿里云
 * @param file
 */
export const uploadAliyun: (file: File)=> Promise<{ url: string, name: string }> = async (file: File) => {
  if (file instanceof File) {
    const client = new OSS({
      region: OSS_CONFIG.region,
      accessKeyId: OSS_CONFIG.accessid,
      accessKeySecret: OSS_CONFIG.secretKey,
      bucket: OSS_CONFIG.bucket,
      endpoint: OSS_CONFIG.host,
      cname: true
    })

    const fileName = fileNameGenerator(file.name)
    const result = await client.put(fileName, file)
    return {
      url: result.url,
      name: file.name
    }
  } else {
    throw new Error('请选择文件进行上传')
  }
}

/**
 * @description 生成文件名
 * @param url 上传的地址
 * @param fileName 目标文件名
 * @returns {string}
 */
export function appendFileNameSearchParam(url: string, fileName: string): string {
  // url = new URL(url)
  // url.searchParams.set(KEY, fileName)
  return url + `?${KEY}=${fileName}`
}

/**
 * @description 获取上传的文件名
 * @param url
 * @returns {string}
 */
export function getUploadFileName(url: string): string {
  const urlObj = new URL(url)
  if (urlObj.searchParams.has(KEY)) {
    return urlObj.searchParams.get(KEY)
  } else {
    const urlArray = decodeURI(urlObj.pathname).split('/')
    return urlArray[urlArray.length - 1]
  }
}
