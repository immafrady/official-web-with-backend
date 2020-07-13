import { IArticleListOptions } from "libs/request/article";
import { ArticleType } from "libs/enums/article";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class ArticleListDto implements IArticleListOptions {
    @ApiPropertyOptional({
        description: '文章类型'
    })
    readonly type: ArticleType;

    @ApiPropertyOptional({
        description: '分页大小',
        type: Number
    })
    readonly size: number | string;

    @ApiPropertyOptional({
        description: '分页页面',
        type: Number
    })
    readonly page: number | string;
}
