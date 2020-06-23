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
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private nzMessageService: NzMessageService
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
      tap(event => {
        if (event instanceof HttpResponse) {
          if (event.body.code && event.body.code !== ResponseCode.Success && event.body.msg) {
            this.nzMessageService.create('error', event.body.msg)
          }
        }
      })
    )
  }
}
