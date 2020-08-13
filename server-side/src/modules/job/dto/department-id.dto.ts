import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DepartmentIdDto {
    @ApiProperty({ description: '部门Id' })
    @IsNumberString()
    id: number;
}
