import { IArticleEntity } from "../entity/article";
import { IRequestPagination } from "../common";

export interface IArticleCreateResponse extends IArticleEntity {
    userId?: number;
}

/**
 * 修改接口
 */
export interface IArticleModifyResponse extends IArticleEntity {
    id?: number;
    userId?: number;
}

/**
 * 删除接口
 */
export interface IArticleDeleteResponse extends IArticleEntity {
    id?: number;
}

/**
 * 单篇文章
 */
export interface IArticleDetailResponse extends IArticleEntity {
    id?: number;
}

/**
 * 文章列表
 */
export interface IArticleListResponse extends IArticleEntity, IRequestPagination{
    id?: number;
}
