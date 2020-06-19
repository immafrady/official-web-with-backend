/**
 * 新增接口
 */
import { IRequestPagination } from "../common";
import { IArticleEntity } from "../entity/article";

export interface IArticleCreateOptions extends IArticleEntity {
    userId: number;
}

/**
 * 修改接口
 */
export interface IArticleModifyOptions extends IArticleEntity {
    id?: number;
    userId: number;
}

/**
 * 删除接口
 */
export interface IArticleDeleteOptions {
    id: number;
}

/**
 * 单篇文章
 */
export interface IArticleDetailOptions extends Partial<IArticleEntity> {
    id: number;
}

/**
 * 文章列表
 */
export interface IArticleListOptions extends Partial<IArticleEntity>, IRequestPagination{}
