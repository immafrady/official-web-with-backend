import { Controller, Get } from '@nestjs/common';
import { successResponse } from '../../utils/ro-builder.utils';
import {IHttpResponse} from "libs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('系统(system)')
@ApiBearerAuth()
@Controller('system')
export class SystemController {

    @Get('check-login-status')
    async checkIsLogin(): Promise<IHttpResponse<any>> {
        return successResponse({});
    }
}
