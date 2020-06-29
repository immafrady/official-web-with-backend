import { WebMiddleware, Middleware, provide, config } from "midway";
import { CONFIG_JWT, HEADER_USER_ID, MIDDLEWARE_JWT } from "../inject-token";
import * as jwt from 'jsonwebtoken'
import { UserNotAuthorizeError } from 'libs/response-error';
import { IJWTSavedInfo } from "../interfaces/config.interface";



@provide(MIDDLEWARE_JWT)
export class JwtMiddleware implements WebMiddleware {
    @config(CONFIG_JWT)
    jwtConfig;

    resolve(): Middleware {
        return async (ctx, next) => {
            const auth = ctx.request.headers['authorization'] || ''
            if (auth.startsWith('Bearer')) {
                const token = auth.split(' ')[1]
                try {
                    const decoded = jwt.verify(token, this.jwtConfig.secret) as IJWTSavedInfo;
                    ctx.request.headers[HEADER_USER_ID] = decoded.id
                } catch (e) {
                    throw new UserNotAuthorizeError(e)
                }
            } else {
                throw new UserNotAuthorizeError()
            }
            return await next();
        };
    }

}
