import {IsNumberString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DetailIdDto {
    @ApiProperty({ description: '详情id'})
    @IsNumberString()
    id: number
}
