import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DepartmentIdDto {
    @ApiProperty({ description: '职位Id' })
    @IsNumberString()
    id: number;
}
