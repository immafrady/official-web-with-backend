import { ArticlePick, IArticleEntity } from "../entity/article";
import { IDeleteResult, IResponsePagination, IUpdateResult } from "../common";
import { IUserEntity } from '../entity/user';

/**
 * @description 新增接口
 */
export interface IArticleCreateResponse {}

/**
 * @description 修改接口
 */
export interface IArticleModifyResponse {}

/**
 * @description 删除接口
 */
export interface IArticleDeleteResponse extends IDeleteResult {}

/**
 * @description 单篇文章
 */
export interface IArticleDetailResponse {
    article: IArticleEntity;
    related?: [ArticlePick, ArticlePick],
    author?: Pick<IUserEntity, "id" | "nickname">
}

/**
 * @description 文章列表
 */
export interface IArticleListResponse extends IResponsePagination<IArticleEntity> {}

/**
 *  @description 修改文章状态接口
 */
export interface IArticleSetStatusResponse extends IUpdateResult {}
