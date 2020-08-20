import {IIncidentDetailEditOptions} from "libs/request/incident";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsNumber, IsOptional, IsString} from "class-validator";

export class DetailEditDto implements IIncidentDetailEditOptions {

    @ApiProperty({ description: '描述' })
    @IsString()
    readonly detail: string;

    @ApiPropertyOptional({ description: '详情id, 无id时新增'})
    @IsNumber()
    @IsOptional()
    readonly id?: number;

    @ApiProperty({ description: '标题' })
    @IsString()
    readonly title: string;

    @ApiProperty({ description: '关联的年份Id' })
    @IsNumber()
    readonly yearId: number
}
