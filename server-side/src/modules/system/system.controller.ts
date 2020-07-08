import { Controller, Get } from '@nestjs/common';
import { successResponse } from '../../utils/ro-builder.utils';
import {IHttpResponse} from "libs/common";

@Controller('system')
export class SystemController {

    @Get('check-login-status')
    async checkIsLogin(): Promise<IHttpResponse<any>> {
        return successResponse({})
    }
}
