import { Injectable } from '@angular/core';
import {IHttpResponse} from "../../../../../../../../libs/common";
import {IArticleCreateOptions} from "../../../../../../../../libs/request/article";
import {HttpService} from "../../../../../shared/http.service";
import {IArticleCreateResponse} from "../../../../../../../../libs/response/article";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(
    private http: HttpService
  ) { }

  saveArticle(data:IArticleCreateOptions): Observable<IHttpResponse<IArticleCreateResponse>>{
    return this.http.post('/article/new', data) as Observable<IHttpResponse<IArticleCreateResponse>>
  }
}
