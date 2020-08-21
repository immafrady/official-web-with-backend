import { PaginationDto } from "../../../shared/pagination.dto";
import { IPictureListOptions } from "libs/request/picture";
import { PicturePriority, PictureType } from "libs/enums/picture";
import { IsEnum, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class PictureListDto extends PaginationDto implements IPictureListOptions {
    @ApiPropertyOptional({ description: '图片类型', enum: PictureType })
    @IsEnum(PictureType)
    @IsOptional()
    readonly type: PictureType;

    @ApiPropertyOptional({ description: '图片权重', enum: PicturePriority })
    @IsEnum(PicturePriority)
    @IsOptional()
    readonly priority: PicturePriority;
}
