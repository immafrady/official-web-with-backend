import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HttpService} from "../../../../shared/http.service";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
  constructor(
    private http : HttpService,
    private router: Router
  ) { }

  login(data: Object){

    return this.http.post('/user/login', data, res => {
      const storage = window.localStorage;
      storage.setItem('admin-token', res.data.token);
      this.router.navigateByUrl('/admin/news-list')
    })
  }
}
