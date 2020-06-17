import { WebMiddleware, Middleware, provide, logger, EggContextLogger } from "midway";
import { LOGGER_REQUEST, MIDDLEWARE_REQUEST_LOGGER } from "../../inject-token";

@provide(MIDDLEWARE_REQUEST_LOGGER)
export class RequestLogger implements WebMiddleware{
    @logger(LOGGER_REQUEST)
    logger: EggContextLogger;

    resolve(): Middleware {
        return async (ctx, next) => {
            this.logger.info(`[From: ${ctx.ip}]Url: ${ctx.request.url}(Method: ${ctx.request.method})`)
            await next()
        };
    }
}
