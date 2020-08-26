import { IArticleEditSortOptions } from "libs/request/article";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class SortArticleDto implements IArticleEditSortOptions {
    @ApiProperty({ description: "文章排序 - 越小越前" })
    @IsNumber()
    sort: number;
}
