/**
 * 请求响应码
 */
export const enum ResponseCode {
  Success = 1000,
  UnknownError = 9999
}

// 返回结构体
export interface IHttpResponse<Data> {
  code: ResponseCode,
  data: Data,
  msg: string
}
