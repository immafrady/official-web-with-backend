import { Context, inject, controller, get, provide } from 'midway';
import { MIDDLEWARE_JWT } from "../../inject-token";
import { successResponse } from "../../utils/response-builder.util";

@provide()
@controller('/h', { middleware: [] })
export class HomeController {

  @inject()
  ctx: Context;

  @get('/home', { middleware: [MIDDLEWARE_JWT] })
  async index() {
    return successResponse({ id: this.ctx.request.headers['user-id'] }, '哈哈')
  }

  @get('/update')
  async update() {
    return successResponse({i: 1}, '哈哈')
  }
}
