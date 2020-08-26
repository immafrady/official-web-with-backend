import { IPictureEditOptions } from "libs/request/picture";
import { PicturePriority, PictureType } from "libs/enums/picture";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

export class EditPictureDto implements IPictureEditOptions{
    @ApiProperty({ description: '图片标题' })
    @IsString()
    readonly title: string;

    @ApiPropertyOptional({ description: '图片描述' })
    @IsString()
    @IsOptional()
    readonly comment: string;

    @ApiProperty({ description: '图片权重', enum: PicturePriority })
    @IsEnum(PicturePriority)
    readonly priority: PicturePriority;

    @ApiProperty({ description: '图片类型', enum: PictureType })
    @IsEnum(PictureType)
    readonly type: PictureType;

    @ApiPropertyOptional({ description: '图片修改日期' })
    @IsDateString()
    @IsOptional()
    readonly modifyDate: Date;

    @ApiProperty({ description: '修改图片排序 - 单条' })
    @IsNumber()
    readonly sort: number;
}
