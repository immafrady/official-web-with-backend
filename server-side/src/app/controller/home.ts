import { Context, inject, controller, get, provide } from 'midway';
import { MIDDLEWARE_JWT } from "../../inject-token";

@provide()
@controller('/', { middleware: [] })
export class HomeController {

  @inject()
  ctx: Context;

  @get('/home', { middleware: [MIDDLEWARE_JWT] })
  async index() {
    this.ctx.body = {
      status: 'ok'
    };
    this.ctx.status = 200;
  }

  @get('/update')
  async update() {
    this.ctx.body = {
      status: 'not ok'
    };
    this.ctx.status = 200
  }
}
