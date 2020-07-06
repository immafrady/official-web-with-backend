import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getDataFromJwt } from '../../utils/get-data-from-jwt.utls';


export const UserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest()
        const decoded = getDataFromJwt(req)
        return decoded?.id
    }
)
