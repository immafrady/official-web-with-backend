import { IMAGE_BASE_PATH } from "../config/images";

/**
 * @description 获取图片地址
 * @param fileName    图片文件名
 * @param suffix    图片后缀名
 */
export function getImage(fileName: string, suffix: string = 'png') {
  return IMAGE_BASE_PATH + fileName + '.' + suffix
}
