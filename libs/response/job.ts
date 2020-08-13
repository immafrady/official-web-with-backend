import { IDeleteResult, IResponsePagination } from "../common";
import { IJobDepartmentEntity } from '../entity/job';

// --------- 职位 -----------
export interface IJobDepartmentListResponse extends IResponsePagination<IJobDepartmentEntity>{}

export interface IJobDepartmentSaveResponse {}

export interface IJobDepartmentDeleteResponse extends IDeleteResult {}

export interface IJobDepartmentDetailResponse extends IJobDepartmentEntity {}

// --------- 详情 -----------
export interface IJobDetailDeleteResponse extends IDeleteResult {}
