import { IPictureDeleteOptions } from "libs/request/picture";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class DeletePictureDto implements IPictureDeleteOptions {
    @ApiProperty({ description: '需要删除的图片ID们' })
    @IsNumber({ allowNaN: false, allowInfinity: false }, { each: true })
    readonly ids: number[];
}
