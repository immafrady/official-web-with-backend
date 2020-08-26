import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from '@libs/common';
import {
  IArticleDeleteResponse,
  IArticleListResponse, IArticleModifyResponse,
  IArticleSetStatusResponse
} from '@libs/response/article';
import { HttpClient } from "@angular/common/http";
import {IArticleDeleteOptions, IArticleEditSortOptions, IArticleSetStatusOption} from '@libs/request/article';

@Injectable({
  providedIn: 'root'
})
export class NewsLIstService {
  constructor(
    private http: HttpClient
  ) { }

  // 获取文章列表
  getNewsList(): Observable<IHttpResponse<IArticleListResponse>> {
    return this.http.get('/article/admin/list') as Observable<IHttpResponse<IArticleListResponse>>
  }

  // 上线或者下线
  handlerArticle(id: IArticleSetStatusOption): Observable<IHttpResponse<IArticleSetStatusResponse>> {
    return this.http.put(`/article/detail/${ id }/status`, null) as Observable<IHttpResponse<IArticleSetStatusResponse>>
  }

  // 删除新闻
  deleteArticle(id:IArticleDeleteOptions): Observable<IHttpResponse<IArticleDeleteResponse>> {
    return this.http.delete(`/article/detail/${ id }`) as Observable<IHttpResponse<IArticleDeleteResponse>>
  }

  // 修改排序
  updateArticleSort(id: number, data: IArticleEditSortOptions): Observable<IHttpResponse<IArticleModifyResponse>> {
    return this.http.put(`/article/detail/${id}/sort`, data) as Observable<IHttpResponse<IArticleModifyResponse>>
  }


}
