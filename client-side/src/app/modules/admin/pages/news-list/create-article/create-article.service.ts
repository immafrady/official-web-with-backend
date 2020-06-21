import { Injectable } from '@angular/core';
import {IHttpResponse} from "../../../../../../../../libs/common";
import {IArticleCreateOptions} from "../../../../../../../../libs/request/article";
import {IArticleCreateResponse} from "../../../../../../../../libs/response/article";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {
  constructor(
    private http: HttpClient
  ) { }

  saveArticle(data:IArticleCreateOptions): Observable<IHttpResponse<IArticleCreateResponse>>{
    return this.http.post('/article/new', data) as Observable<IHttpResponse<IArticleCreateResponse>>
  }
}
