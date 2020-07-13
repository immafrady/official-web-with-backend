import { IUserRegisterOptions } from 'libs/request/user';
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto implements IUserRegisterOptions{
    @ApiProperty()
    key: string;

    @ApiProperty()
    nickname: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    username: string;
}
