import { Injectable } from '@angular/core';
import {HttpService} from "../../../../shared/http.service";
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../libs/common";
import {IArticleListResponse} from "../../../../../../../libs/response/article";

@Injectable({
  providedIn: 'root'
})
export class NewsLIstService {
  constructor(
    private http: HttpService
  ) { }
  getNewsList(): Observable<IHttpResponse<IArticleListResponse>> {
    return this.http.get('/article/list') as Observable<IHttpResponse<IArticleListResponse>>
  }
}
