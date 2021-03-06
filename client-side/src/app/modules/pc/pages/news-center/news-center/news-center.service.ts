import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IHttpResponse} from '@libs/common';
import {IArticleDetailResponse, IArticleListResponse} from '@libs/response/article';
import {IArticleDetailOptions, IArticleListOptions} from '@libs/request/article';
import {HttpClient} from "@angular/common/http";
import {TransferState} from "@angular/platform-browser";
import {httpParamsHandler} from '@/utils/httpParamsHandler';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsCenterService {
  constructor(
    private http: HttpClient,
    private transferState:TransferState
  ) { }

  getNewsList(data:IArticleListOptions, key): Observable<IHttpResponse<IArticleListResponse>> {
    const transferList = this.transferState.get(key,undefined);
    if (transferList) {
      this.transferState.remove(key);
      return of(transferList)
    } else {
      return this.http.get('/article/list', {
        params: httpParamsHandler(data)
      }).pipe(
        tap((res: IHttpResponse<IArticleListResponse>) => {
          this.transferState.set(key, res)
        })
      ) as Observable<IHttpResponse<IArticleListResponse>>
    }
  }

  getPageNewsList(data:IArticleListOptions): Observable<IHttpResponse<IArticleListResponse>> {
    return this.http.get('/article/list', { params: httpParamsHandler(data) }) as Observable<IHttpResponse<IArticleListResponse>>
  }

  getNewsDetail(data: IArticleDetailOptions): Observable<IHttpResponse<IArticleDetailResponse>> {
    return this.http.get(`/article/detail/${ data.id }`) as Observable<IHttpResponse<IArticleDetailResponse>>
  }
}
