import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../../libs/common";
import {IArticleDetailResponse, IArticleListResponse} from "../../../../../../../../libs/response/article";
import {IArticleDetailOptions, IArticleListOptions} from "../../../../../../../../libs/request/article";
import {HttpClient, HttpParams} from "@angular/common/http";
import {makeStateKey, TransferState} from "@angular/platform-browser";
import {httpParamsHandler} from "../../../../../../utils/httpParamsHandler";
import {tap} from "rxjs/operators";

const key = makeStateKey('article-list');

@Injectable({
  providedIn: 'root'
})
export class NewsCenterService {
  constructor(
    private http: HttpClient,
    private transferState:TransferState
  ) { }


  getNewsList(data:IArticleListOptions): Observable<IHttpResponse<IArticleListResponse>> {
    console.log(this.transferState.get(key,undefined));
    // @ts-ignore
    return this.http.get('/article/list?' + httpParamsHandler(data)).pipe(
      tap((res: IHttpResponse<IArticleListResponse>) => {
        this.transferState.set(key, res.data)
      })
    ) as Observable<IHttpResponse<IArticleListResponse>>
  }

  getNewsDetail(data: IArticleDetailOptions): Observable<IHttpResponse<IArticleDetailResponse>> {
    return this.http.get(`/article/detail/${ data.id }`) as Observable<IHttpResponse<IArticleDetailResponse>>
  }
}
