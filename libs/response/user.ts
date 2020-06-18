export interface IUserLoginResponse {
    // 登录token，放在headers里： Authorize: Bearer ${token}
    token: string;
    // 用户昵称
    nickname: string;
}

export interface IUserRegisterResponse {

}
