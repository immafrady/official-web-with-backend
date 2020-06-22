import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "../../../../../../../../libs/common";
import {IArticleListResponse} from "../../../../../../../../libs/response/article";
import {IArticleListOptions} from "../../../../../../../../libs/request/article";
import {HttpClient, HttpParams} from "@angular/common/http";
import {makeStateKey, TransferState} from "@angular/platform-browser";
import {httpParamsHandler} from "../../../../../../utils/httpParamsHandler";

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
    return this.http.get('/article/list?' + httpParamsHandler(data))
  }
}
