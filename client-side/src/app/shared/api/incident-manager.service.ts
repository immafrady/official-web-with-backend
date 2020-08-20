/**
 * 企业大事件 - 接口
 * @author w
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IIncidentDetailEditOptions, IIncidentYearEditOptions } from "@libs/request/incident";
import { Observable, of } from "rxjs";
import { IHttpResponse } from "@libs/common";
import {
  IIncidentDetailDeleteResponse, IIncidentDetailDetailResponse, IIncidentDetailListResponse,
  IIncidentDetailSaveResponse, IIncidentListResponse,
  IIncidentYearDeleteResponse,
  IIncidentYearListResponse,
  IIncidentYearSaveResponse
} from "@libs/response/incident";
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { tap } from "rxjs/operators";

const stateKey = makeStateKey('incident-list')

@Injectable({
  providedIn: 'root'
})
export class IncidentManagerService {
  constructor(private http: HttpClient, private transferState: TransferState) { }

  // 保存年份
  saveYear(data: IIncidentYearEditOptions): Observable<IHttpResponse<IIncidentYearSaveResponse>> {
    return this.http.post('/incident/year/save', data) as Observable<IHttpResponse<IIncidentYearSaveResponse>>
  }

  // 删除年份
  deleteYear(id: number): Observable<IHttpResponse<IIncidentYearDeleteResponse>> {
    return this.http.delete(`/incident/year/detail/${id}`) as Observable<IHttpResponse<IIncidentYearDeleteResponse>>
  }

  // 年份列表
  getYearList(): Observable<IHttpResponse<IIncidentYearListResponse>> {
    return this.http.get('/incident/year/list') as Observable<IHttpResponse<IIncidentYearListResponse>>
  }

  // 保存详情
  saveDetail(data: IIncidentDetailEditOptions): Observable<IHttpResponse<IIncidentDetailSaveResponse>> {
    return this.http.post('/incident/item/save', data) as Observable<IHttpResponse<IIncidentDetailSaveResponse>>
  }

  // 删除详情
  deleteDetail(id: number): Observable<IHttpResponse<IIncidentDetailDeleteResponse>> {
    return this.http.delete(`/incident/item/detail/${id}`) as Observable<IHttpResponse<IIncidentDetailDeleteResponse>>
  }

  // 获取详情详情
  getDetail(id: number): Observable<IHttpResponse<IIncidentDetailDetailResponse>> {
    return this.http.get(`/incident/item/detail/${id}`) as Observable<IHttpResponse<IIncidentDetailDetailResponse>>
  }

  // 获取详情列表
  getDetailList(): Observable<IHttpResponse<IIncidentDetailListResponse>> {
    return this.http.get('/incident/item/list') as Observable<IHttpResponse<IIncidentDetailListResponse>>
  }

  // 获取前端详情
  getCommonList(): Observable<IHttpResponse<IIncidentListResponse>> {
    const list = this.transferState.get(stateKey, undefined);
    if (list) {
      this.transferState.remove(stateKey)
      return of(list)
    } else {
      return this.http.get('/incident/list').pipe(
        tap((res: IHttpResponse<IIncidentListResponse>) => {
          this.transferState.set(stateKey, res)
        })
      ) as Observable<IHttpResponse<IIncidentListResponse>>
    }

  }
}
