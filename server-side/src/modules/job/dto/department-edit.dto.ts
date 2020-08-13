import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { IJobDepartmentEditOptions } from "libs/request/job";

export class DepartmentEditDto implements IJobDepartmentEditOptions{
    @ApiPropertyOptional({ description: '部门Id，无Id时新增' })
    @IsNumber()
    @IsOptional()
    readonly id?: number;

    @ApiProperty({ description: '部门名字' })
    @IsString()
    readonly label: string;

    @ApiProperty({ description: '排序顺序，数字越小越排前，支持负数' })
    @IsNumber()
    readonly sort: number;
}

