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
export interface IResponsePagination<T> {
    total: number;
    list: T[]
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

export interface IDeleteResult {
    /**
     * Raw SQL result returned by executed query.
     */
    raw: any;
    /**
     * Number of affected rows/documents
     * Not all drivers support this
     */
    affected?: number | null;
}

export interface IUpdateResult {
    /**
     * Raw SQL result returned by executed query.
     */
    raw: any;
    /**
     * Number of affected rows/documents
     * Not all drivers support this
     */
    affected?: number;
    /**
     * Contains inserted entity id.
     * Has entity-like structure (not just column database name and values).
     */
    /**
     * Generated values returned by a database.
     * Has entity-like structure (not just column database name and values).
     */
    generatedMaps: any[];
}
