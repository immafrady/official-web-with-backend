import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumberString, IsOptional } from "class-validator";
import { IRequestPagination } from "libs/common";

export class PaginationDto implements IRequestPagination{
    @ApiPropertyOptional({ description: '分页大小', type: Number })
    @IsNumberString()
    @IsOptional()
    readonly size: number | string;

    @ApiPropertyOptional({ description: '分页页面', type: Number })
    @IsNumberString()
    @IsOptional()
    readonly page: number | string;
}
