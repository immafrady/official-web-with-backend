import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "@libs/common";
import {HttpClient} from "@angular/common/http";
import {IPictureDetailOptions, IPictureEditOptions, IPictureSaveOptions} from "@libs/request/picture";
import {IPictureDetailResponse, IPictureEditResponse, IPictureSaveResponse} from "@libs/response/picture";

@Injectable({
  providedIn: 'root'
})
export class EditPictureService {

  constructor(
    private http: HttpClient
  ) { }

  // 保存图片
  savePicture(data:IPictureSaveOptions): Observable<IHttpResponse<IPictureSaveResponse>>{
    return this.http.post('/picture/save', data) as Observable<IHttpResponse<IPictureSaveResponse>>
  }

  // 编辑图片
  modifyPicture(id, data:IPictureEditOptions): Observable<IHttpResponse<IPictureEditResponse>>{
    return this.http.put(`/picture/detail/${id}`, data) as Observable<IHttpResponse<IPictureEditResponse>>
  }


  // 查看图片详情
  getPictureDetail(id): Observable<IHttpResponse<IPictureDetailResponse>>{
    return this.http.get(`/picture/detail/${id}`) as Observable<IHttpResponse<IPictureDetailResponse>>
  }
}
