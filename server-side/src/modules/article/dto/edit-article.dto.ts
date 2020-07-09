import { IArticleModifyOptions } from "libs/request/article";
import { ArticlePriority, ArticleStatus, ArticleType } from "libs/enums/article";

export class EditArticleDto implements IArticleModifyOptions{
    readonly content: string;
    readonly modifyDate: Date;
    readonly priority: ArticlePriority;
    readonly status: ArticleStatus;
    readonly thumbnail: string;
    readonly title: string;
    readonly type: ArticleType[];
}
