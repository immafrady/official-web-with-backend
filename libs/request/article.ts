/**
 * @description 新增接口
 */
import { IRequestPagination } from "../common";
import { IArticleEntity } from "../entity/article";

export interface IArticleCreateOptions extends IArticleEntity {
    userId?: number;
}

/**
 * @description 修改接口
 */
export interface IArticleModifyOptions extends IArticleEntity {
    id?: number;
    userId: number;
}

/**
 * @description 删除接口
 */
export interface IArticleDeleteOptions {
    id: number;
}

/**
 * @description 单篇文章
 */
export interface IArticleDetailOptions extends Partial<IArticleEntity> {
    id: number;
}

/**
 * @description 文章列表
 */
export interface IArticleListOptions extends Partial<IArticleEntity>, IRequestPagination{}

/**
 * @description 修改文章状态接口
 */
export type IArticleSetStatusOption = number|string
