import { Context } from "koa";
import { HEADER_USER_ID } from "../inject-token";

export function getIdFromHeader(ctx: Context) {
    if (ctx) {
        return ctx.headers[HEADER_USER_ID]
    }
}
