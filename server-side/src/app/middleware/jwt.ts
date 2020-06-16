import { WebMiddleware, Middleware, provide, config } from "midway";
import { CONFIG_JWT, MIDDLEWARE_JWT } from "../../inject-token";

@provide(MIDDLEWARE_JWT)
export class JwtMiddleware implements WebMiddleware {
    @config(CONFIG_JWT)
    jwtConfig;

    resolve(): Middleware {
        console.log('jwt: ', this.jwtConfig)
        return async (ctx, next) => {
            console.log('trigger', ctx)
            await next();
        };
    }

}
