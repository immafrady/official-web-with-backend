import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../../libs/common";
import {IArticleListResponse} from "../../../../../../../../libs/response/article";
import {IArticleListOptions} from "../../../../../../../../libs/request/article";
import {HttpClient, HttpParams} from "@angular/common/http";
import {makeStateKey, TransferState} from "@angular/platform-browser";

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
    const httpParams = new HttpParams()
    console.log(this.transferState.get(key,undefined));
    return this.http.get('/article/list', { params: data })
  }
}
