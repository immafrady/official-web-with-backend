import { PicturePriority, PictureType } from "libs/enums/picture";
import { IsArray, IsDate, IsDateString, IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IPictureSaveOptions } from "libs/request/picture";

export class SavePictureDto implements IPictureSaveOptions{
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

    @ApiProperty({ description: '图片链接们' })
    @IsUrl({}, {
        each: true
    })
    readonly urls: string[];
}
