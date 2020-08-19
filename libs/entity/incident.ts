import {IBaseEntity} from "../common";

export interface IIncidentYearEntity extends Partial<IBaseEntity>{
    year: string;
    sort: number;
    label: string;
}

export interface IIncidentDetailEntity extends Partial<IBaseEntity>{
    title: string;
    detail: string;
    incidentYear?: IIncidentYearEntity
}
