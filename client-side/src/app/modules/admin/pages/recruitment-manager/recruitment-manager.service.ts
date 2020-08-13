import { Injectable } from '@angular/core';
import {IJobDetailEditOptions} from "@libs/request/job";
import {Observable} from "rxjs";
import {IHttpResponse} from "@libs/common";
import {
  IJobDetailDeleteResponse,
  IJobDetailDetailResponse,
  IJobDetailListResponse,
  IJobDetailSaveResponse
} from "@libs/response/job";
import {HttpClient} from "@angular/common/http";
import {IArticleDetailResponse} from "@libs/response/article";

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
}
