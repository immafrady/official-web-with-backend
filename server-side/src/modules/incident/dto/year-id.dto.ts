import {IsNumber, IsNumberString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class YearIdDto  {

    @ApiProperty({ description: '年份id' })
    @IsNumberString()
    id: number;
}
