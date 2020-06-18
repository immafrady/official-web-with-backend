import { ResponseCode } from "./response-code";
import { BaseResponseError } from "./common";

export class UserNotFoundError extends BaseResponseError {
    constructor(message = '找不到用户', data?: any) {
        super(ResponseCode.UserNotFound, message, data);
    }
}

export class UserPasswordNotPairError extends BaseResponseError {
    constructor(message = '用户密码不匹配', data?: any) {
        super(ResponseCode.UserPasswordNotPair, message, data);
    }
}

export class UserNotAuthorizeError extends BaseResponseError {
    constructor(message = '用户未授权登录', data?: any) {
        super(ResponseCode.UserNotAuthorize, message, data);
    }
}

export class UserAlreadyExistError extends BaseResponseError {
    constructor(message = '用户已存在', data?: any) {
        super(ResponseCode.UserAlreadyExist, message, data);
    }
}

export class UserRegisterKeyNotPairError extends BaseResponseError {
    constructor(message = '注册用key不正确', data?: any) {
        super(ResponseCode.UserRegisterKeyNotPair, message, data);
    }
}

export class UnknownError extends BaseResponseError {
    constructor(message = '', data?: any) {
        super(ResponseCode.UnknownError, message, data);
    }
}
