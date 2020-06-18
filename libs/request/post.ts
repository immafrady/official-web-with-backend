/**
 * 新增接口
 */
import { IdParam, IRequestPagination } from "../common";
import { IPostEntity } from "../entity/post";

export interface IPostCreateOptions extends IPostEntity {
    userId: number;
}

/**
 * 修改接口
 */
export interface IPostModifyOptions extends IPostEntity {
    id: IdParam;
    userId: number;
}

/**
 * 删除接口
 */
export interface IPostDeleteOptions {
    id: IdParam;
}

/**
 * 单篇文章
 */
export interface IPostDetailOptions extends Partial<IPostEntity> {
    id: IdParam;
}

/**
 * 文章列表
 */
export interface IPostListOptions extends Partial<IPostEntity>, IRequestPagination{}
