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
    ArticleListCannotMake,
    PictureCannotSave = 3001,
    PictureCannotDelete,
    PictureCannotModify,
    PictureNotFound,
    JobDepartmentCannotSave = 4001,
    JobDepartmentCannotDelete,
    JobDepartmentCannotModify,
    JobDepartmentNotFound,
    JobDetailCannotSave = 4051,
    JobDetailCannotDelete,
    JobDetailCannotModify,
    JobDetailNotFound,
    CommonFormInvalid = 400,
    UnknownError = 9999
}
