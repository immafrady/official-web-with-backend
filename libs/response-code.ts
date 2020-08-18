/**
 * 请求响应码
 */
export const enum ResponseCode {
    Success = 1000, // 成功
    UserNotFound, // 无法找到用户
    UserPasswordNotPair, // 用户账号秘密无法配对
    UserNotAuthorize, // 用户没有授权
    UserAlreadyExist, // 用户已存在
    UserRegisterKeyNotPair, // 用户注册key无法配对
    CommonEditCannotCreate = 2001, // 常规 - 编辑 - 无法新增
    CommonEditCannotModify, // 常规 - 编辑 - 无法修改
    CommonEditCannotDelete, // 常规 - 编辑 - 无法删除
    CommonFormInvalid = 400, // 常规 - 表单校验错误
    CommonItemForbidden = 403, // 常规 - 没有权限
    CommonItemNotFound = 404, // 常规 - 找不到东西
    UnknownError = 9999 // 未知错误
}
