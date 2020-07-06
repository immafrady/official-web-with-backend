import { IUserLoginOptions } from 'libs/request/user';

export class LoginDto implements IUserLoginOptions{
    readonly password: string;
    readonly username: string;
}
