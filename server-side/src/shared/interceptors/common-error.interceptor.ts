import {
    CallHandler,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
    NestInterceptor
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { CustomLogger } from "../modules/logger/custom-logger.service";
import { ResponseError } from "../response-error";
import { ResponseCode } from "libs/response-code";

@Injectable()
export class CommonErrorInterceptor implements NestInterceptor {
    constructor(
        @Inject(CustomLogger)
        private readonly logger: CustomLogger
    ) {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError(err => {
                    if (err instanceof ResponseError) {
                        return throwError(err);
                    } else if (err instanceof HttpException && err.getStatus() === HttpStatus.BAD_REQUEST){
                        // 处理表单校验拦截
                        const res = err.getResponse() as { message: string[] }

                        return throwError(new ResponseError(ResponseCode.CommonFormInvalid, '表单校验错误', {
                            message: res?.message
                        }))
                    } else {
                        return throwError(new ResponseError(ResponseCode.UnknownError, '未知错误', {
                            stack: err.stack,
                            name: err.name
                        }));
                    }
                })
            );
    }
}
