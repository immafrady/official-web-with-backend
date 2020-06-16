import { ResponseCode } from "./response-code";

// 返回结构体
export interface IHttpResponse<Data> {
    code: ResponseCode,
    data: Data,
    msg: string
}
