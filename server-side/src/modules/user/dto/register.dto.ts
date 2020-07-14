import { IUserRegisterOptions } from 'libs/request/user';
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RegisterDto implements IUserRegisterOptions{
    @ApiProperty({ description: '注册用密匙' })
    @IsString()
    key: string;

    @ApiProperty({ description: '昵称' })
    @IsString()
    nickname: string;

    @ApiProperty({ description: '密码' })
    @IsString()
    password: string;

    @ApiProperty({ description: '用户名' })
    @IsString()
    username: string;
}
