import { IJobDetailEditOptions } from "libs/request/job";
import { IJobContentDetail } from "libs/entity/job";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator";
import { JobStatus } from "libs/enums/job";

export class DetailEditDto implements IJobDetailEditOptions {
    @ApiProperty({ description: '职位需求' })
    @ValidateNested()
    readonly content: JobContentDetail;

    @ApiProperty({ description: '部门' })
    @IsString()
    readonly department: string;

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
    @IsNumberString()
    readonly departmentId: number;

    @ApiProperty({ description: '职位状态', enum: JobStatus })
    @IsEnum(JobStatus)
    readonly status: JobStatus;
}

class JobContentDetail implements IJobContentDetail {
    @ApiPropertyOptional({ description: '岗位职责' })
    @IsString()
    @IsOptional()
    readonly duty: string;

    @ApiPropertyOptional({ description: '任职需求' })
    @IsString()
    @IsOptional()
    readonly requirement: string;

    @ApiPropertyOptional({ description: '其他输入' })
    @IsString()
    @IsOptional()
    readonly other: string;
}
