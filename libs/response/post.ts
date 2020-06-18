import { IPostEntity } from "../entity/post";
import { IRequestPagination } from "../common";

export interface IPostCreateResponse extends IPostEntity {
    userId?: number;
}

/**
 * 修改接口
 */
export interface IPostModifyResponse extends IPostEntity {
    id?: number;
    userId?: number;
}

/**
 * 删除接口
 */
export interface IPostDeleteResponse extends IPostEntity {
    id?: number;
}

/**
 * 单篇文章
 */
export interface IPostDetailResponse extends IPostEntity {
    id?: number;
}

/**
 * 文章列表
 */
export interface IPostListResponse extends IPostEntity, IRequestPagination{
    id?: number;
}
