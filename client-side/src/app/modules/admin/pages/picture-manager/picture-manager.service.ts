import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { IHttpResponse } from "@libs/common";
import { IPictureDeleteResponse, IPictureListResponse } from "@libs/response/picture";
import { IPictureDeleteOptions, IPictureListOptions } from "@libs/request/picture";
import { httpParamsHandler } from "@/utils/httpParamsHandler";

@Injectable({
  providedIn: 'root'
})
export class PictureManagerService {
  constructor(private http: HttpClient) { }

  getPictureList(params?: IPictureListOptions): Observable<IHttpResponse<IPictureListResponse>> {
    return this.http.get('/picture/list', { params: httpParamsHandler(params) }) as Observable<IHttpResponse<IPictureListResponse>>
  }

  deletePictures(data: IPictureDeleteOptions): Observable<IHttpResponse<IPictureDeleteResponse>> {
    return this.http.put('/picture/delete', data) as Observable<IHttpResponse<IPictureDeleteResponse>>
  }
}
