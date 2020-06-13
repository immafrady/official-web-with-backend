import { Context, inject, controller, get, provide, post } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/home')
  async index() {
    this.ctx.body = {
      status: 'ok'
    };
    this.ctx.status = 200;
  }

  @post('/update')
  async update() {
    this.ctx.body = {
      status: 'not ok'
    };
    this.ctx.status = 200
  }
}
