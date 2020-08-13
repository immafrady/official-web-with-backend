import { IResponsePagination } from '../common';
import { IJobDepartmentEntity } from '../entity/job';

export interface IJobDepartmentListResponse extends IResponsePagination<IJobDepartmentEntity>{}
