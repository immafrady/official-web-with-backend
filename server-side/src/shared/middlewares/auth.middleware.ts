import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getDataFromJwt } from '../../utils/get-data-from-jwt.utls';
import { ResponseError } from "../response-error";
import { ResponseCode } from "libs/response-code";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction): void {
        const decoded = getDataFromJwt(req);
        if (decoded) {
            next();
        } else {
            throw new ResponseError(ResponseCode.UserNotAuthorize, '用户未授权登录');
        }
    }
}
