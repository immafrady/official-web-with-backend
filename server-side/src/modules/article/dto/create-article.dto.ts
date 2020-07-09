import { IArticleCreateOptions } from "libs/request/article";
import { ArticlePriority, ArticleStatus, ArticleType } from "libs/enums/article";

export class CreateArticleDto implements IArticleCreateOptions{
    readonly content: string;
    readonly modifyDate: Date;
    readonly priority: ArticlePriority;
    readonly status: ArticleStatus;
    readonly thumbnail: string;
    readonly title: string;
    readonly type: ArticleType[];
}
