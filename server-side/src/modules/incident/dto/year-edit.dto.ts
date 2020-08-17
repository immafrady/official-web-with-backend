import {IIncidentYearEditOptions} from "libs/request/incident";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsNumber, IsOptional, IsString} from "class-validator";

export class YearEditDto implements IIncidentYearEditOptions{
    @ApiPropertyOptional({ description: '年份id, 无id时新增'})
    @IsNumber()
    @IsOptional()
    readonly id?: number;

    @ApiProperty({ description: '历程概括'})
    @IsString()
    readonly label: string;

    @ApiProperty({ description: '排序顺序，数字越小越排前，支持负数' })
    @IsNumber()
    readonly sort: number;

    @ApiProperty({ description: '年份' })
    @IsString()
    readonly year: string;
}
