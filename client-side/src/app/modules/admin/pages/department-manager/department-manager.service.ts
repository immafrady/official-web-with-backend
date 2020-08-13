import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IHttpResponse} from "@libs/common";
import {IJobDepartmentEditOptions} from "@libs/request/job";
import {IJobDepartmentDeleteResponse, IJobDepartmentListResponse, IJobDepartmentSaveResponse} from "@libs/response/job";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentManagerService {

  constructor(
    private http: HttpClient
  ) { }

  // 保存部门
  saveDepartment(data:IJobDepartmentEditOptions): Observable<IHttpResponse<IJobDepartmentSaveResponse>>{
    return this.http.post('/job/department/save', data) as Observable<IHttpResponse<IJobDepartmentSaveResponse>>
  }

  // 获取文章列表
  getDepartmentList(): Observable<IHttpResponse<IJobDepartmentListResponse>> {
    return this.http.get('/job/department/list') as Observable<IHttpResponse<IJobDepartmentListResponse>>
  }

  // 删除部门
  deleteDepartment(id: number): Observable<IHttpResponse<IJobDepartmentDeleteResponse>> {
    return this.http.delete(`/job/department/detail/${ id }`) as Observable<IHttpResponse<IJobDepartmentDeleteResponse>>
  }
}
