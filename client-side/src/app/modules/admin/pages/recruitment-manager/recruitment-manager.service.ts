import { Injectable } from '@angular/core';
import {IJobDetailEditOptions} from "@libs/request/job";
import {Observable} from "rxjs";
import {IHttpResponse} from "@libs/common";
import {
  IJobDetailDeleteResponse,
  IJobDetailDetailResponse,
  IJobDetailListResponse,
  IJobDetailSaveResponse,
  IJobDetailSetStatusResponse
} from "@libs/response/job";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecruitmentManagerService {

  constructor(
    private http: HttpClient
  ) { }

  // 保存发布岗位
  saveRecruitment(data:IJobDetailEditOptions): Observable<IHttpResponse<IJobDetailSaveResponse>>{
    return this.http.post('/job/item/save', data) as Observable<IHttpResponse<IJobDetailSaveResponse>>
  }

  // 获取招聘列表
  getRecruitmentList(): Observable<IHttpResponse<IJobDetailListResponse>> {
    return this.http.get('/job/item/list') as Observable<IHttpResponse<IJobDetailListResponse>>
  }

  // 删除招聘信息
  deleteRecruitment(id: number): Observable<IHttpResponse<IJobDetailDeleteResponse>> {
    return this.http.delete(`/job/item/detail/${ id }`) as Observable<IHttpResponse<IJobDetailDeleteResponse>>
  }

  //  获取招聘信息
  getRecruitmentContent(id): Observable<IHttpResponse<IJobDetailDetailResponse>> {
    return this.http.get(`/job/item/detail/${ id }`) as Observable<IHttpResponse<IJobDetailDetailResponse>>
  }

  // 上线或者下线
  handlerRecruit(id): Observable<IHttpResponse<IJobDetailSetStatusResponse>> {
    return this.http.put(`/job/item/detail/${ id }/status`, null) as Observable<IHttpResponse<IJobDetailSetStatusResponse>>
  }
}
