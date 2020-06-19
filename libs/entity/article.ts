import { ArticlePriority, ArticleStatus } from "../enums/article";

/**
 * @description 文章实体接口
 */
export interface IArticleEntity {
    title: string;
    content: string;
    thumbnail: string;
    modifyDate: Date;
    status: ArticleStatus;
    priority: ArticlePriority;
}
