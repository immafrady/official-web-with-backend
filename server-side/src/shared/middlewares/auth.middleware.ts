import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserNotAuthorizeError } from 'libs/response-error';
import { getDataFromJwt } from '../../utils/get-data-from-jwt.utls';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly logger: Logger
    ) {
    }

    use(req: Request, res: Response, next: NextFunction): void {
        const decoded = getDataFromJwt(req);
        if (decoded) {
            next();
        } else {
            this.logger.info('un auth!!')
            throw new UserNotAuthorizeError();
        }
    }
}
