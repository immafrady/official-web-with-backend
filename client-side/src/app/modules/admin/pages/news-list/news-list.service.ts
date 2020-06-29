import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from '@libs/common';
import {
  IArticleDeleteResponse,
  IArticleListResponse,
  IArticleSetStatusResponse
} from '@libs/response/article';
import { HttpClient } from "@angular/common/http";
import {IArticleDeleteOptions, IArticleSetStatusOption} from '@libs/request/article';

@Injectable({
  providedIn: 'root'
})
export class NewsLIstService {
  constructor(
    private http: HttpClient
  ) { }

  // 获取文章列表
  getNewsList(): Observable<IHttpResponse<IArticleListResponse>> {
    return this.http.get('/article/list') as Observable<IHttpResponse<IArticleListResponse>>
  }

  // 上线或者下线
  handlerArticle(id: IArticleSetStatusOption): Observable<IHttpResponse<IArticleSetStatusResponse>> {
    return this.http.put(`/article/detail/${ id }/status`, null) as Observable<IHttpResponse<IArticleSetStatusResponse>>
  }

  // 删除新闻
  deleteArticle(id:IArticleDeleteOptions): Observable<IHttpResponse<IArticleDeleteResponse>> {
    return this.http.delete(`/article/detail/${ id }`) as Observable<IHttpResponse<IArticleDeleteResponse>>
  }

}
