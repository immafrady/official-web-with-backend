import { ResponseCode } from "libs/response-code";

export class ResponseError extends Error{
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
