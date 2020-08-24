import {IDeleteResult, IResponsePagination} from "../common";
import {IIncidentDetailEntity, IIncidentYearEntity} from "../entity/incident";

export interface IIncidentYearSaveResponse {}

export interface IIncidentYearDeleteResponse extends IDeleteResult{}

export interface IIncidentYearListResponse extends  IResponsePagination<IIncidentYearEntity>{}

export interface IIncidentDetailDeleteResponse extends IDeleteResult{}

export interface IIncidentDetailSaveResponse {}

export interface IIncidentDetailListResponse extends IResponsePagination<IIncidentDetailEntity>{}

export interface IIncidentDetailDetailResponse extends IIncidentDetailEntity{}

export type IListYearListWithoutNoDetailResult = Pick<IIncidentYearEntity, "year"| "label">[];
export type IListYearListFormattedDetailResult = { [year: string]: IIncidentDetailEntity[] };
export interface IIncidentListResponse {
    yearList: IListYearListWithoutNoDetailResult;
    details: IListYearListFormattedDetailResult
}
