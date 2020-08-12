import { IBaseEntity } from "../common";

export interface IJobTypeEntity extends Partial<IBaseEntity> {
    label: string;
}

export interface IJobDetailEntity extends Partial<IBaseEntity> {
    title: string;
    department: string;
    location: string;
    modifyDate: Date;
    content: IJobContentDetail;
}

export interface IJobContentDetail {
    duty: string;
    requirement: string
}
