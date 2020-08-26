import { IPictureEditSortOptions } from "libs/request/picture";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class SortPictureDto implements IPictureEditSortOptions{
    @ApiProperty({ description: '图片排序' })
    @IsNumber()
    sort: number;
}
