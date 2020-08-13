import { IJobDetailEditOptions } from "libs/request/job";
import { IJobContentDetail } from "libs/entity/job";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { JobStatus } from "libs/enums/job";
import { Type } from "class-transformer";

class JobContentDetail implements IJobContentDetail {
    @ApiPropertyOptional({ description: '岗位职责' })
    @IsString()
    @IsOptional()
    readonly duty?: string;

    @ApiPropertyOptional({ description: '任职需求' })
    @IsString()
    @IsOptional()
    readonly requirement?: string;

    @ApiPropertyOptional({ description: '其他输入' })
    @IsString()
    @IsOptional()
    readonly other?: string;
}

export class DetailEditDto implements IJobDetailEditOptions {
    @ApiProperty({ description: '职位Id - 编辑时需要' })
    @IsNumber()
    readonly id?: number;

    @ApiProperty({ description: '职位需求' })
    @ValidateNested()
    @Type(() => JobContentDetail)
    readonly content: JobContentDetail;

    @ApiProperty({ description: '工作地' })
    @IsString()
    readonly location: string;

    @ApiProperty({ description: '发布时间' })
    @IsDateString()
    readonly modifyDate: Date;

    @ApiProperty({ description: '职位名称' })
    @IsString()
    readonly title: string;

    @ApiProperty({ description: '对应部门Id' })
    @IsNumber()
    readonly departmentId: number;

    @ApiProperty({ description: '职位状态', enum: JobStatus })
    @IsEnum(JobStatus)
    readonly status: JobStatus;

    @ApiProperty({ description: '是否急聘' })
    @IsBoolean()
    eager: boolean;

    @ApiProperty({ description: '是否火热' })
    @IsBoolean()
    hot: boolean;
}
