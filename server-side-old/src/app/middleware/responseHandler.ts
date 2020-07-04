import { Middleware } from "koa";
import { BaseResponseError, IHttpResponse } from 'libs/common';
import { errorResponse } from "../../utils/response-builder.util";
import { Application } from "midway";
import { LOGGER_REQUEST } from "../../inject-token";
import { responseLoggerBuilder } from "../../utils/logger-builder.util";
import { UnknownError } from 'libs/response-error';


export default function (options: any, app: Application): Middleware {
    return async (ctx, next) => {
        const logger = app.getLogger(LOGGER_REQUEST)
        try {
            const res = await next() as IHttpResponse<any>
            if (res) {
                ctx.body = res
                logger.info(responseLoggerBuilder(ctx.status, res.code, ctx.url, ctx.method, res.msg, res.data))
                ctx.status = 200
            }
            return res
        } catch (e) {
            if (e instanceof Error) {
                if (!(e instanceof BaseResponseError)) {
                    e = new UnknownError('未知错误', {
                        stack: e.stack,
                        name: e.name
                    })
                }
                ctx.body = errorResponse(e.code, e.message, e.data)
                logger.error(responseLoggerBuilder(ctx.status, ctx.body.code, ctx.url, ctx.method, ctx.body.msg, ctx.body.data))
            }
            // 非Error不处理
        }
    }

}
