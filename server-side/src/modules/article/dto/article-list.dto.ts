import { IArticleListOptions } from "libs/request/article";
import { ArticleType } from "libs/enums/article";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "../../../shared/pagination.dto";

export class ArticleListDto extends PaginationDto implements IArticleListOptions {
    @ApiPropertyOptional({ description: '文章类型', enum: ArticleType })
    @IsEnum(ArticleType)
    @IsOptional()
    readonly type: ArticleType;
}
