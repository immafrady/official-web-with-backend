import { IDeleteResult, IResponsePagination } from "../common";
import { IJobDepartmentEntity, IJobDetailEntity } from "../entity/job";

// --------- 职位 -----------
export interface IJobDepartmentListResponse extends IResponsePagination<IJobDepartmentEntity>{}

export interface IJobDepartmentSaveResponse {}

export interface IJobDepartmentDeleteResponse extends IDeleteResult {}

export interface IJobDepartmentDetailResponse extends IJobDepartmentEntity {}

// --------- 详情 -----------
export interface IJobDetailDeleteResponse extends IDeleteResult {}

export interface IJobDetailDetailResponse extends IJobDetailEntity {}

export interface IJobDetailSaveResponse {}

export interface IJobDetailListResponse extends IResponsePagination<IJobDetailEntity> {}

// ---------- 加入我们 -----------
export interface IJobListResponse {
    departments: string[];
    details: { [departmentName: string]: IJobDetailEntity[] }
}
