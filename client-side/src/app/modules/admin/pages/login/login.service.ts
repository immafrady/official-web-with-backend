import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../libs/common";
import {IUserLoginResponse} from "../../../../../../../libs/response/user";
import {IUserLoginOptions} from "../../../../../../../libs/request/user";
import {Md5} from "ts-md5";
import {tap} from "rxjs/operators";
import { REQUEST_AUTH_TOKEN } from "../../../../../config/resources";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
  constructor(
    private http : HttpClient
  ) { }

  login(data:IUserLoginOptions): Observable<IHttpResponse<IUserLoginResponse>>{
    const form = {
      username: data.username?.trim(),
      password: Md5.hashStr(data.password)
    };
    return this.http.post('/user/login', form).pipe(
      tap((res: IHttpResponse<IUserLoginResponse>) => {
        const storage = window.localStorage;
        storage.setItem(REQUEST_AUTH_TOKEN, res.data.token);
      })
    ) as Observable<IHttpResponse<IUserLoginResponse>>
  }
}
