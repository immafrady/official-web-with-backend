import { IBaseEntity } from "../common";
import { PicturePriority, PictureType } from "../enums/picture";

/**
 * 图片实体
 */
export interface IPictureEntity extends Partial<IBaseEntity> {
    url: string;
    type: PictureType;
    priority: PicturePriority;
    modifyDate: Date;
    comment: string;
    title: string;
    sort: number;
}
