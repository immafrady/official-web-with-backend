export interface IUserLoginResponse {
    // 登录token，放在headers里： Authorization: Bearer ${token}
    token: string;
    // 用户昵称
    nickname: string;
}

export interface IUserRegisterResponse {

}
