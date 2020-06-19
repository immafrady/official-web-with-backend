import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../libs/common";
import {IArticleListResponse} from "../../../../../../../libs/response/article";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsLIstService {
  constructor(
    private http: HttpClient
  ) { }
  getNewsList(): Observable<IHttpResponse<IArticleListResponse>> {
    return this.http.get('/article/list') as Observable<IHttpResponse<IArticleListResponse>>
  }
}
