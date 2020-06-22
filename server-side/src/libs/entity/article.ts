import { ArticlePriority, ArticleStatus, ArticleType } from '../enums/article';
import { IBaseEntity } from "../common";

/**
 * @description 文章实体接口
 */
export interface IArticleEntity extends Partial<IBaseEntity>{
    title: string;
    content: string;
    thumbnail: string;
    modifyDate: Date;
    status: ArticleStatus;
    priority: ArticlePriority;
    type: ArticleType;
}

export type ArticlePick = {
    id: number,
    title: string
}
