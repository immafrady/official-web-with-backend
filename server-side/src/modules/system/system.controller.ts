import { Controller, Get } from '@nestjs/common';
import { successResponse } from '../../utils/ro-builder.utils';

@Controller('system')
export class SystemController {

    @Get('check-login-status')
    async checkIsLogin() {
        return successResponse({})
    }
}
