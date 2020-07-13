import { IUserLoginOptions } from 'libs/request/user';
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto implements IUserLoginOptions{
    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly username: string;
}
