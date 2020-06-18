import { provide, inject, config } from 'midway';
import { IUserService } from "../interfaces/user.interface";
import { CONFIG_JWT, SERVICE_DB, SERVICE_USER } from "../inject-token";
import { IUserLoginResponse, IUserRegisterResponse } from "../../../libs/response/user";
import { User } from "../db/entities/user";
import { IUserLoginOptions, IUserRegisterOptions } from "../../../libs/request/user";
import {
  UserAlreadyExistError,
  UserNotFoundError,
  UserPasswordNotPairError,
  UserRegisterKeyNotPairError
} from "../../../libs/response-error";
import * as jwt from 'jsonwebtoken'
import { generatePassword } from "../utils/generate-password.util";
import { IDb } from "../interfaces/db.interface";
import { IJWTConfig, IJWTSavedInfo } from "../interfaces/config.interface";

@provide(SERVICE_USER)
export class UserService implements IUserService {

  @inject(SERVICE_DB)
  db: IDb;

  @config(CONFIG_JWT)
  jwtConfig: IJWTConfig;

  // 登录
  async login(options: IUserLoginOptions): Promise<IUserLoginResponse> {
    const repo = this.db.getRepository(User)
    const user = await repo.findOne({
      where: {
        username: options.username
      }
    })
    if (user) {
      if (user.password === generatePassword(options.password)) {
        const secret = this.jwtConfig.secret as string
        const payload: IJWTSavedInfo = {
          id: user.id,
        }
        return {
          nickname: user.nickname,
          token: jwt.sign(payload, secret, { expiresIn: '60' })
        }
      } else {
        throw new UserPasswordNotPairError()
      }
    } else {
      throw new UserNotFoundError()
    }
  }

  // 注册
  async register(options: IUserRegisterOptions): Promise<IUserRegisterResponse> {
    // todo 生产上要加个key，可能安全一点
    if (options.key === '') {
      const repo = this.db.getRepository(User)
      let user = await repo.findOne({
        where: {
          username: options.username
        }
      })
      if (user) {
        throw new UserAlreadyExistError()
      }

      user = new User()
      user.username = options.username
      user.password = generatePassword(options.password)
      user.nickname = options.nickname

      await repo.save(user)
      return {}

    } else {
      throw new UserRegisterKeyNotPairError
    }
  }
}
