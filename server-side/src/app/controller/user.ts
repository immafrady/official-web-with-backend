import { Context, controller, inject, provide, post } from 'midway';
import { successResponse } from "../../utils/responseBuilder";
import { IHttpResponse } from "../../../../libs/common";
import { IUserLoginResponse, IUserRegisterResponse } from "../../../../libs/response/user";
import { IUserLoginOptions, IUserRegisterOptions } from "../../../../libs/request/user";
import { SERVICE_USER } from "../../inject-token";
import { IUserService } from "../../interfaces/user";

@provide()
@controller('/user')
export class UserController {

  @inject()
  ctx: Context;

  @inject(SERVICE_USER)
  service: IUserService;

  @post('/login')
  async login(): Promise<IHttpResponse<IUserLoginResponse>> {
    const reqBody: IUserLoginOptions = this.ctx.request.body
    const options: IUserLoginOptions = {
      username: reqBody.username,
      password: reqBody.password
    }
    return successResponse(await this.service.login(options), '登录成功')
  }

  @post('/register')
  async register(): Promise<IHttpResponse<IUserRegisterResponse>> {
    const reqBody: IUserRegisterOptions = this.ctx.request.body
    const options: IUserRegisterOptions = {
      username: reqBody.username,
      password: reqBody.password,
      key: reqBody.key,
      nickname: reqBody.nickname
    }
    return successResponse(await this.service.register(options), '注册成功')
  }
}
