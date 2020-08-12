import { IResponsePagination } from '../common';
import { IJobTypeEntity } from '../entity/job';

export interface IJobTypeListResponse extends IResponsePagination<IJobTypeEntity>{}
