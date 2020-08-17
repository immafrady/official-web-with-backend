import {IDeleteResult, IResponsePagination} from "../common";
import {IIncidentYearEntity} from "../entity/incident";

export interface IIncidentYearSaveResponse {}

export interface IIncidentYearDeleteResponse extends IDeleteResult{}

export interface IIncidentYearListResponse extends  IResponsePagination<IIncidentYearEntity>{}


