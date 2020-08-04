import { IArticleListOptions } from "libs/request/article";
import { ArticleType } from "libs/enums/article";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumberString, IsOptional } from "class-validator";

export class ArticleListDto implements IArticleListOptions {
    @ApiPropertyOptional({ description: '文章类型' })
    @IsEnum(ArticleType)
    @IsOptional()
    readonly type: ArticleType;

    @ApiPropertyOptional({ description: '分页大小', type: Number })
    @IsNumberString()
    @IsOptional()
    readonly size: number | string;

    @ApiPropertyOptional({ description: '分页页面', type: Number })
    @IsNumberString()
    @IsOptional()
    readonly page: number | string;
}
