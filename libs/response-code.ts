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
    UnknownError = 9999
}
