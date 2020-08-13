import { Injectable } from '@angular/core';
import {IPictureListOptions} from "@libs/request/picture";
import {Observable} from "rxjs";
import {IHttpResponse} from "@libs/common";
import {IPictureListResponse} from "@libs/response/picture";
import {httpParamsHandler} from "@/utils/httpParamsHandler";
import {HttpClient} from "@angular/common/http";
import {IJobListResponse} from "@libs/response/job";

@Injectable({
  providedIn: 'root'
})
export class JoinUsService {

  constructor(
    private http: HttpClient
  ) { }

  getPictureList(params?: IPictureListOptions): Observable<IHttpResponse<IPictureListResponse>> {
    return this.http.get('/picture/list', { params: httpParamsHandler(params) }) as Observable<IHttpResponse<IPictureListResponse>>
  }

  getJobList(): Observable<IHttpResponse<IJobListResponse>> {
    // @ts-ignore
    return this.http.get('/job/list', null) as Observable<IHttpResponse<IJobListResponse>>
  }
}
