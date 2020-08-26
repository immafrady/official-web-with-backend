import { PicturePriority, PictureType } from "../enums/picture";
import { IPictureEntity } from "../entity/picture";
import { IRequestPagination } from "../common";

/**
 * @description 新增图片
 */
export interface IPictureSaveOptions {
    title: string;
    comment?: string;
    priority: PicturePriority;
    type: PictureType;
    modifyDate: Date;
    urls: string[];
    sort: number;
}

/**
 * @description 删除图片
 */
export interface IPictureDeleteOptions {
    ids: number[];
}

/**
 * @description 修改图片
 */
export interface IPictureEditOptions extends Omit<IPictureEntity, "url">{}

/**
 * @description 编辑图片排序
 */
export interface IPictureEditSortOptions extends Pick<IPictureEntity, "sort">{}

/**
 * @description 图片列表
 */
export interface IPictureListOptions extends IRequestPagination{
    type?: PictureType;
    priority?: PicturePriority;
}

/**
 * @description 图片详情
 */
export interface IPictureDetailOptions {}
