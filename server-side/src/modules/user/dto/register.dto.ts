import { IUserRegisterOptions } from 'libs/request/user';

export class RegisterDto implements IUserRegisterOptions{
    key: string;
    nickname: string;
    password: string;
    username: string;
}
