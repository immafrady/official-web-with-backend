import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from "@angular/common";
import { REQUEST_AUTH_TOKEN } from "../config/resources";
import { ResponseCode } from '../../../server-side/src/libs/response-code';
import { NzMessageService } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private nzMessageService: NzMessageService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let url = request.url
    if (!request.url.startsWith('/')) {
      url = '/' + url
    }
    url = '/api' + url

    let setHeaders

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(REQUEST_AUTH_TOKEN)
      if (token) {
        setHeaders = {
          'Authorization': `Bearer ${token}`
        }
      }
    }

    return next.handle(request.clone({
      url,
      setHeaders
    })).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          if (event.body.code) {
            // 这些才是我们包装过的返回值

            // 抛出消息
            if (event.body.msg) {
              this.nzMessageService.create(event.body.code === ResponseCode.Success ? 'success' : 'error', event.body.msg)
            }

            // 逻辑处理
            if (event.body.code !== ResponseCode.Success) {
              switch (event.body.code) {
                case ResponseCode.UserNotAuthorize:
                  this.router.navigateByUrl('/admin/login')
                  break
              }

              // 异常返回码以错误形式抛出
              throw event
            }
          }
        }
        return event
      })
    )
  }
}
