import { IArticleListOptions } from "libs/request/article";
import { ArticleType } from "libs/enums/article";

export class ArticleListDto implements IArticleListOptions {
    readonly type: ArticleType
    readonly size: number | string;
    readonly page: number | string;
}
