import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseController } from '../../shared/base.controller';
import { LoginDto, RegisterDto } from './dto';
import { IHttpResponse } from 'libs/common';
import { IUserLoginResponse, IUserRegisterResponse } from 'libs/response/user';
import {
    UserAlreadyExistError,
    UserNotFoundError,
    UserPasswordNotPairError,
    UserRegisterKeyNotPairError
} from 'libs/response-error';
import { successResponse } from '../../utils/ro-builder.utils';
import { config } from '../../config';
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";

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
            throw new UserNotFoundError();
        }
        if (!this.userService.checkPasswordEqual(loginDto.password, user.password)) {
            throw new UserPasswordNotPairError();
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
            throw new UserRegisterKeyNotPairError();
        }

        const user = await this.userService.findByUsername(registerDto.username);
        if (user) {
            throw new UserAlreadyExistError();
        }
        return successResponse(await this.userService.createNewUser(registerDto));
    }
}
