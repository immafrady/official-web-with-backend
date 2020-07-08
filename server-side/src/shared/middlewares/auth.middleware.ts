import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserNotAuthorizeError } from 'libs/response-error';
import { getDataFromJwt } from '../../utils/get-data-from-jwt.utls';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const decoded = getDataFromJwt(req)
        if (decoded) {
            next()
        } else {
            throw new UserNotAuthorizeError()
        }
    }
}
