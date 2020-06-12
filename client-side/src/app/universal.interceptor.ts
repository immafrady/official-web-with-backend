import {Inject, Injectable, Optional} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {REQUEST} from "@nguniversal/express-engine/tokens";
import {Request} from 'express';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(
    @Optional()
    @Inject(REQUEST)
    protected request: Request
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let serverReq: HttpRequest<any> = req
    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({url: newUrl});
    }
    return next.handle(serverReq);
  }
}
