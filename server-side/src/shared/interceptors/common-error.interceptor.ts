import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BaseResponseError} from 'libs/common';
import {UnknownError} from 'libs/response-error';

@Injectable()
export class CommonErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError(err => {
                    if (err instanceof BaseResponseError) {
                        return throwError(err)
                    } else {
                        return throwError(new UnknownError('未知错误', {
                            stack: err.stack,
                            name: err.name
                        }))
                    }
                })
            );
    }
}
