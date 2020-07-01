import { ResponseCode } from "./response-code";

// 返回结构体
export interface IHttpResponse<Data> {
    code: ResponseCode,
    data: Data,
    msg: string
}

export type IdParam = string | number;

/**
 * @description 请求列表分页
 */
export interface IRequestPagination {
    size?: number | string;
    page?: number | string;
}

/**
 * @description 响应列表分页
 */
export interface IResponsePagination {
    total: number;
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

export interface IBaseEntity {
    id: number;
    createDate: Date;
    updateDate: Date;
}
