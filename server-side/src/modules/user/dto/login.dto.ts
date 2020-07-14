import { IUserLoginOptions } from 'libs/request/user';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto implements IUserLoginOptions{
    @ApiProperty({ example: 'yaqing', description: '用户名' })
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({ example: 'f8dd33746e2597d78f956beb03f0ccb6', description: '密码' })
    @IsNotEmpty()
    readonly password: string;
}
