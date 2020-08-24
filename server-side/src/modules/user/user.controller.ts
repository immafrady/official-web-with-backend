import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseController } from '../../shared/base.controller';
import { LoginDto, RegisterDto } from './dto';
import { IHttpResponse } from 'libs/common';
import { IUserLoginResponse, IUserRegisterResponse } from 'libs/response/user';
import { successResponse } from '../../utils/ro-builder.utils';
import { config } from '../../config';
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";

@ApiTags('用户(user)')
@ApiBearerAuth()
@Controller('user')
export class UserController extends BaseController {

    constructor(
        private readonly userService: UserService
    ) {
        super();
    }

    @ApiOperation({ summary: '登录' })
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<IHttpResponse<IUserLoginResponse>> {
        const user = await this.userService.findByUsername(loginDto.username);
        if (!user) {
            throw new ResponseError(ResponseCode.UserNotFound, '找不到用户');
        }
        if (!this.userService.checkPasswordEqual(loginDto.password, user.password)) {
            throw new ResponseError(ResponseCode.UserPasswordNotPair, '用户密码不匹配');
        }
        return successResponse( {
            nickname: user.nickname,
            token: this.userService.generateJWT(user.id)
        } as IUserLoginResponse);
    }

    @ApiOperation({ summary: '注册' })
    @Post('register')
    async register(@Body() registerDto: RegisterDto): Promise<IHttpResponse<IUserRegisterResponse>> {
        if (registerDto.key !== config.registerKey) {
            throw new ResponseError(ResponseCode.UserRegisterKeyNotPair, '注册用key不正确');
        }

        const user = await this.userService.findByUsername(registerDto.username);
        if (user) {
            throw new ResponseError(ResponseCode.UserAlreadyExist, '用户已存在');
        }
        return successResponse(await this.userService.createNewUser(registerDto));
    }
}
