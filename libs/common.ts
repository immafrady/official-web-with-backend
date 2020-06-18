import { ResponseCode } from "./response-code";

// 返回结构体
export interface IHttpResponse<Data> {
    code: ResponseCode,
    data: Data,
    msg: string
}

export type IdParam = string | number;

/**
 * @description 列表分页
 */
export interface IRequestPagination {
    size: number;
    page: number;
}

export class BaseResponseError extends Error{
    code: ResponseCode;
    message: string;
    data: any;
    constructor(code: ResponseCode, message: string, data: any = {}) {
        super();
        this.code = code;
        this.message = message;
        this.data = data;
    }
}

export interface IHttpAuthRequest {
    userId: number;
}
