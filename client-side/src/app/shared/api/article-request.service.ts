import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IHttpResponse} from "../../../../../libs/common";
import {
  IArticleCreateResponse, IArticleDeleteResponse,
  IArticleDetailResponse,
  IArticleListResponse, IArticleModifyResponse, IArticleSetStatusResponse
} from '../../../../../libs/response/article';
import {
  IArticleCreateOptions, IArticleDeleteOptions,
  IArticleDetailOptions,
  IArticleListOptions,
  IArticleModifyOptions, IArticleSetStatusOption
} from '../../../../../libs/request/article';
import {HttpClient} from "@angular/common/http";
import {TransferState} from "@angular/platform-browser";
import {httpParamsHandler} from "../../../utils/httpParamsHandler";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleRequestService {
  constructor(
    private http: HttpClient,
    private transferState:TransferState
  ) { }

  // 保存文章
  saveArticle(data:IArticleCreateOptions): Observable<IHttpResponse<IArticleCreateResponse>>{
    return this.http.post('/article/new', data) as Observable<IHttpResponse<IArticleCreateResponse>>
  }

  //  获取文章数据
  getArticleContent(id): Observable<IHttpResponse<IArticleDetailResponse>> {
    return this.http.get(`/article/detail/${ id }`) as Observable<IHttpResponse<IArticleDetailResponse>>
  }

  // 保存编辑文章
  saveDetailArticle(data:IArticleModifyOptions): Observable<IHttpResponse<IArticleModifyResponse>>{
    return this.http.put(`/article/detail/${ data.id }`, data) as Observable<IHttpResponse<IArticleModifyResponse>>
  }

  // 管理端 - 获取文章列表
  getNewsListAdmin(): Observable<IHttpResponse<IArticleListResponse>> {
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

  // 客户端 - 列表
  getNewsList(data:IArticleListOptions, key): Observable<IHttpResponse<IArticleListResponse>> {
    const transferList = this.transferState.get(key,undefined);
    if (transferList) {
      this.transferState.remove(key);
      return of(transferList)
    } else {
      return this.http.get('/article/list?' + httpParamsHandler(data)).pipe(
        tap((res: IHttpResponse<IArticleListResponse>) => {
          this.transferState.set(key, res)
        })
      ) as Observable<IHttpResponse<IArticleListResponse>>
    }
  }

  // 客户端详情
  getNewsDetail(data: IArticleDetailOptions): Observable<IHttpResponse<IArticleDetailResponse>> {
    return this.http.get(`/article/detail/${ data.id }`) as Observable<IHttpResponse<IArticleDetailResponse>>
  }
}
