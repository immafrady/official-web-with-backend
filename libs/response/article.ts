import { IArticleEntity } from "../entity/article";
import { IRequestPagination, IResponsePagination } from "../common";

/**
 * @description
 */
export interface IArticleCreateResponse {}

/**
 * 修改接口
 */
export interface IArticleModifyResponse {}

/**
 * 删除接口
 */
export interface IArticleDeleteResponse {
    /**
     * Raw SQL result returned by executed query.
     */
    raw: any;
    /**
     * Number of affected rows/documents
     * Not all drivers support this
     */
    affected?: number | null;
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
export interface IArticleListResponse extends IResponsePagination{
    list: IArticleEntity[]
}
