import { Injectable } from '@angular/core';
import {IHttpResponse} from "../../../../../../../../libs/common";
import {
  IArticleCreateOptions,
  IArticleModifyOptions
} from "../../../../../../../../libs/request/article";
import {
  IArticleCreateResponse,
  IArticleDetailResponse, IArticleModifyResponse
} from "../../../../../../../../libs/response/article";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {
  constructor(
    private http: HttpClient
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

}
