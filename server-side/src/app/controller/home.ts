import { Context, inject, controller, get, provide, logger } from 'midway';
import { MIDDLEWARE_JWT, MIDDLEWARE_REQUEST_LOGGER, SERVICE_DB } from "../../inject-token";

@provide()
@controller('/', { middleware: [MIDDLEWARE_REQUEST_LOGGER] })
export class HomeController {

  @inject()
  ctx: Context;

  @inject(SERVICE_DB)
  dbService;

  @logger()
  logger;

  @get('/home', { middleware: [MIDDLEWARE_JWT] })
  async index() {
    const connection = this.dbService.getConnection()
    connection.connect()
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
