import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IHttpResponse } from "@libs/common";
import {IPictureDeleteResponse, IPictureEditResponse, IPictureListResponse} from "@libs/response/picture";
import {IPictureDeleteOptions, IPictureEditSortOptions, IPictureListOptions} from "@libs/request/picture";
import { httpParamsHandler } from "@/utils/httpParamsHandler";

@Injectable({
  providedIn: 'root'
})
export class PictureManagerService {
  constructor(private http: HttpClient) { }

  getPictureList(params?: IPictureListOptions): Observable<IHttpResponse<IPictureListResponse>> {
    return this.http.get('/picture/list', { params: httpParamsHandler(params) }) as Observable<IHttpResponse<IPictureListResponse>>
  }

  // 删除图片
  deletePictures(data: IPictureDeleteOptions): Observable<IHttpResponse<IPictureDeleteResponse>> {
    return this.http.put('/picture/delete', data) as Observable<IHttpResponse<IPictureDeleteResponse>>
  }

  // 修改排序
  updatePictureSort(id: number, data: IPictureEditSortOptions): Observable<IHttpResponse<IPictureEditResponse>> {
    return this.http.put(`/picture/detail/${id}/sort`, data) as Observable<IHttpResponse<IPictureEditResponse>>
  }
}
