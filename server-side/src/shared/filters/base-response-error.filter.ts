import { ArgumentsHost, Catch, ExceptionFilter, Inject } from "@nestjs/common";
import { BaseResponseError } from 'libs/common';
import { Request, Response } from "express";
import { errorResponse } from '../../utils/ro-builder.utils';
import { CustomLogger } from "../modules/logger/custom-logger.service";

@Catch(BaseResponseError)
export class BaseResponseErrorFilter implements ExceptionFilter {
    constructor(
        @Inject(CustomLogger)
        private readonly logger: CustomLogger
    ) {
    }

    catch(exception: BaseResponseError, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse<Response>();
        const formattedException = errorResponse(exception.code, exception.message, exception.data)
        response
            .status(200)
            .json(formattedException);
        this.logger.httpResponse(request as Request, formattedException, true);
    }
}
