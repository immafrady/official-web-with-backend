import { controller, provide, get } from 'midway'
import { successResponse } from '../../utils/response-builder.util';
import { MIDDLEWARE_JWT } from '../../inject-token';

@provide()
@controller('/system')
export class SystemController {

    @get('/check-login-status', { middleware: [MIDDLEWARE_JWT] })
    checkIsLogin() {
        return successResponse({}, '')
    }
}
