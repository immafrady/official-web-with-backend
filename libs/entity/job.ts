import { IBaseEntity } from "../common";
import { JobStatus } from "../enums/job";

export interface IJobDepartmentEntity extends Partial<IBaseEntity> {
    label: string;
    sort: number;
}

export interface IJobDetailEntity extends Partial<IBaseEntity> {
    title: string;
    location: string;
    modifyDate: Date;
    content: IJobContentDetail;
    status: JobStatus;
    department?: IJobDepartmentEntity;
}

export interface IJobContentDetail {
    duty?: string;
    requirement?: string;
    other?: string;
}
