import {
    CallHandler,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
    NestInterceptor
} from "@nestjs/common";
import {Observable, throwError} from 'rxjs';
import { catchError } from "rxjs/operators";
import {BaseResponseError} from 'libs/common';
import { CommonFormInvalidError, UnknownError } from "libs/response-error";
import { CustomLogger } from "../modules/logger/custom-logger.service";

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
                    if (err instanceof BaseResponseError) {
                        return throwError(err);
                    } else if (err instanceof HttpException && err.getStatus() === HttpStatus.BAD_REQUEST){
                        // 处理表单校验拦截
                        const res = err.getResponse() as { message: string[] }

                        return throwError(new CommonFormInvalidError('表单校验错误', {
                            message: res?.message
                        }))
                    } else {
                        return throwError(new UnknownError('未知错误', {
                            stack: err.stack,
                            name: err.name
                        }));
                    }
                })
            );
    }
}
