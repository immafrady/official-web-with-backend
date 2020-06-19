import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpService} from "../../../../shared/http.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../libs/common";
import {IUserLoginResponse} from "../../../../../../../libs/response/user";
import {IUserLoginOptions} from "../../../../../../../libs/request/user";
import {Md5} from "ts-md5";
import {tap} from "rxjs/operators";

@Injectable()
export class LoginService {
  constructor(
    private http : HttpService,
    private router: Router
  ) { }

  login(data:IUserLoginOptions): Observable<IHttpResponse<IUserLoginResponse>>{
    const form = {
      username: data.username,
      password: Md5.hashStr(data.password)
    };
    return this.http.post('/user/login', form).pipe(
      tap((res: IHttpResponse<IUserLoginResponse>) => {
        const storage = window.localStorage;
        storage.setItem('admin-token', res.data.token);
      })
    ) as Observable<IHttpResponse<IUserLoginResponse>>
  }
}
