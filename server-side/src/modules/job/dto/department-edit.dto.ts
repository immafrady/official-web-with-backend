import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { IJobDepartmentEditOptions } from "libs/request/job";

export class DepartmentEditDto implements IJobDepartmentEditOptions{
    @ApiProperty({ description: '部门名字' })
    @IsString()
    readonly label: string;

    @ApiProperty({ description: '排序名字' })
    @IsNumber()
    readonly sort: number;
}
