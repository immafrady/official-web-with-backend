import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseResponseError } from 'libs/common';
import { Response } from 'express';
import { errorResponse } from '../../utils/ro-builder.utils';

@Catch(BaseResponseError)
export class BaseResponseErrorFilter implements ExceptionFilter {
    catch(exception: BaseResponseError, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        response
            .status(200)
            .json(errorResponse(exception.code, exception.message, exception.data))
    }
}
