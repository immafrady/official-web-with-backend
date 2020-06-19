import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  public restServer;
  constructor(
    private http: HttpClient
  ) {
    this.restServer = '/api'
  }
  static headers = {
    'Content-Type': 'application/json; charse=UTF-8',
    'token': window.localStorage.getItem('admin-token')
  };

  public get(url: string, params?: Object, cb?: Function): Observable<Object> {
    let httpParams = new HttpParams();
    console.log('get请求开始');
    if (params) {
      for(const key in params) {
        httpParams = httpParams.set(key, params[key])
      }
    }
    return this.http.get(this.restServer + url, { params: httpParams, headers: HttpService.headers })
  }

  public post(url: string, data?: Object, cb?: Function, options?: Object): Observable<Object>{
    console.log('post请求开始');
    this.http.post(this.restServer + url, data, options).pipe(
      tap(_ => console.log('post发送了')),
      catchError(this.handleError())
    )
    return this.http.post(this.restServer + url, data, options)
  }

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.log(error.msg, operation);
      return of(result as T);
    };
  }
}
