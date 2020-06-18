/**
 * 请求响应码
 */
export const enum ResponseCode {
    Success = 1000,
    UserNotFound,
    UserPasswordNotPair,
    UserNotAuthorize,
    UserAlreadyExist,
    UserRegisterKeyNotPair,
    ArticleCannotCreate = 2001,
    ArticleCannotDelete,
    ArticleCannotModify,
    ArticleNotFound,
    CommonFormInvalid = 9998,
    UnknownError = 9999
}
