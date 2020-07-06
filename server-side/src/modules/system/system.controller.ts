import { Controller, Get } from '@nestjs/common';
import { successResponse } from '../../utils/ro-builder.utils';
import { UserId } from '../../shared/user-id.decorator';

@Controller('system')
export class SystemController {

    @Get('check-login-status')
    async checkIsLogin(@UserId() userId) {
        console.log('get user id: ', userId)
        return successResponse({})
    }
}
