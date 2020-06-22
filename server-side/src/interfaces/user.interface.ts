import { IUserLoginResponse, IUserRegisterResponse } from '../libs/response/user';
import { IUserLoginOptions, IUserRegisterOptions } from '../libs/request/user';

export interface IUserService {
    login(options: IUserLoginOptions): Promise<IUserLoginResponse>;
    register(options: IUserRegisterOptions): Promise<IUserRegisterResponse>;
}

