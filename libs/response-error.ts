import { ResponseCode } from "./response-code";
import { BaseResponseError } from "./common";

export class UserNotFoundError extends BaseResponseError {
    constructor(data?: any, message = '找不到用户') {
        super(ResponseCode.UserNotFound, message, data);
    }
}

export class UserPasswordNotPairError extends BaseResponseError {
    constructor(data?: any, message = '用户密码不匹配') {
        super(ResponseCode.UserPasswordNotPair, message, data);
    }
}

export class UserNotAuthorizeError extends BaseResponseError {
    constructor(data?: any, message = '用户未授权登录') {
        super(ResponseCode.UserNotAuthorize, message, data);
    }
}

export class UserAlreadyExistError extends BaseResponseError {
    constructor( data?: any, message = '用户已存在') {
        super(ResponseCode.UserAlreadyExist, message, data);
    }
}

export class UserRegisterKeyNotPairError extends BaseResponseError {
    constructor(data?: any, message = '注册用key不正确') {
        super(ResponseCode.UserRegisterKeyNotPair, message, data);
    }
}

export class ArticleCannotCreateError extends BaseResponseError {
    constructor(data?: any, message = '无法生成文章') {
        super(ResponseCode.ArticleCannotCreate, message, data);
    }
}

export class ArticleCannotDeleteError extends BaseResponseError {
    constructor(data?: any, message = '无法删除文章') {
        super(ResponseCode.ArticleCannotDelete, message, data);
    }
}

export class ArticleCannotModifyError extends BaseResponseError {
    constructor(data?: any, message = '无法修改文章') {
        super(ResponseCode.ArticleCannotModify, message, data);
    }
}

export class ArticleNotFoundError extends BaseResponseError {
    constructor(data?: any, message = '找不到文章') {
        super(ResponseCode.ArticleNotFound, message, data);
    }
}

export class PictureCannotSaveError extends BaseResponseError {
    constructor(data?: any,  message = '无法保存图片') {
        super(ResponseCode.PictureCannotSave, message, data);
    }
}

export class PictureCannotDeleteError extends BaseResponseError {
    constructor(data?: any,  message = '无法删除图片') {
        super(ResponseCode.PictureCannotDelete, message, data);
    }
}

export class PictureCannotModifyError extends BaseResponseError {
    constructor(data?: any,  message = '无法修改图片') {
        super(ResponseCode.PictureCannotModify, message, data);
    }
}

export class PictureNotFoundError extends BaseResponseError {
    constructor(data?: any,  message = '找不到图片') {
        super(ResponseCode.PictureNotFound, message, data);
    }
}

export class CommonFormInvalidError extends BaseResponseError {
    constructor(message = '表单校验失败', data?: any) {
        super(ResponseCode.CommonFormInvalid, message, data);
    }
}

// 未知错误
export class UnknownError extends BaseResponseError {
    constructor(message = '', data?: any) {
        super(ResponseCode.UnknownError, message, data);
    }
}
