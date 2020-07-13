import { IArticleCreateOptions } from "libs/request/article";
import { ArticlePriority, ArticleStatus, ArticleType } from "libs/enums/article";
import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto implements IArticleCreateOptions{
    @ApiProperty({
        description: '文章内容'
    })
    readonly content: string;

    @ApiProperty({
        description: '文章修改日期'
    })
    readonly modifyDate: Date;

    @ApiProperty({
        description: '文章权重',
        enum: ArticlePriority
    })
    readonly priority: ArticlePriority;

    @ApiProperty({
        description: '文章状态',
        enum: ArticleStatus
    })
    readonly status: ArticleStatus;

    @ApiProperty({
        description: '缩略图'
    })
    readonly thumbnail: string;

    @ApiProperty({
        description: '文章标题'
    })
    readonly title: string;

    @ApiProperty({
        description: '文章类型',
        enum: ArticleType,
        isArray: true
    })
    readonly type: ArticleType[];
}
