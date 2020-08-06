import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString } from "class-validator";

export class PictureIdDto {
    @ApiProperty({ description: '图片Id' })
    @IsNumberString()
    readonly id: number;
}
