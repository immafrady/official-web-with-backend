import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString } from "class-validator";

export class DetailIdDto {
    @ApiProperty({ description: '职位Id' })
    @IsNumberString()
    id: number;
}
