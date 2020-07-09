import { ResponseCode } from 'libs/response-code';
import { IHttpResponse } from 'libs/common';

function responseBuilder<T>(code: ResponseCode, data: T, msg: string = ''): IHttpResponse<T> {
    return {
        code,
        data,
        msg
    };
}

/**
 * @description 成功消息
 * @param data  内容
 * @param msg   消息
 */
export function successResponse<T>(data?: T, msg?: string): IHttpResponse<T> {
    return responseBuilder(ResponseCode.Success, data, msg);
}

/**
 * @description 失败消息
 * @param code
 * @param data
 * @param msg
 */
export function errorResponse<T>(code: ResponseCode, msg?: string, data: T = null): IHttpResponse<T> {
    return responseBuilder(code, data, msg);
}
