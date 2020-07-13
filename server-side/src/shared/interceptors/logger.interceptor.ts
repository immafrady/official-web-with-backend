import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { CustomLogger } from "../modules/logger/logger.service";
import { Request } from "express";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(
      @Inject(CustomLogger)
      private readonly logger: CustomLogger
  ) {
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
        .handle()
        .pipe(
            tap(res => {
                const ctx = context.switchToHttp();
                this.logger.httpResponse(ctx.getRequest() as Request, res)
            })
        );
  }
}
