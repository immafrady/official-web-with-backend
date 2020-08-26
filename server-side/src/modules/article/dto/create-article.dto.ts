import { IArticleCreateOptions } from "libs/request/article";
import { ArticlePriority, ArticleStatus, ArticleType } from "libs/enums/article";
import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNumber, IsString } from "class-validator";

export class CreateArticleDto implements IArticleCreateOptions{
    @ApiProperty({ description: '文章内容' })
    @IsString()
    readonly content: string;

    @ApiProperty({ description: '文章修改日期' })
    @IsDateString()
    readonly modifyDate: Date;

    @ApiProperty({ description: '文章权重', enum: ArticlePriority })
    @IsEnum(ArticlePriority)
    readonly priority: ArticlePriority;

    @ApiProperty({ description: '文章状态', enum: ArticleStatus })
    @IsEnum(ArticleStatus)
    readonly status: ArticleStatus;

    @ApiProperty({ description: '缩略图' })
    @IsString()
    readonly thumbnail: string;

    @ApiProperty({ description: '文章标题' })
    @IsString()
    readonly title: string;

    @ApiProperty({ description: '文章类型', enum: ArticleType, isArray: true })
    @IsEnum(ArticleType, { each: true })
    readonly type: ArticleType[];

    @ApiProperty({ description: '文章排序 - 越小排越前' })
    @IsNumber()
    readonly sort: number;
}
