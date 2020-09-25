import { IBaseEntity } from "../common";
import { BigDataType } from "../enums/big-data";

export interface IBigDataEntity extends IBaseEntity {
    key: BigDataType;
    value: string;
}
