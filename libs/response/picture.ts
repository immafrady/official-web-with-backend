/**
 * @description 新增图片响应
 */
import { IPictureEntity } from "../entity/picture";
import { IResponsePagination } from "../common";

export interface IPictureSaveResponse {}

/**
 * @description 删除图片响应
 */
export interface IPictureDeleteResponse {
    total: number; // 删除总数
    affected: number; // 成功删除数
}

/**
 * @description 修改图片响应
 */
export interface IPictureEditResponse {}

/**
 * @description 图片列表响应
 */
export interface IPictureListResponse extends IResponsePagination<IPictureEntity> {}

/**
 * @description 图片详情响应
 */
export interface IPictureDetailResponse extends IPictureEntity {}
