import { BigDataType } from "libs/enums/big-data";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";

export class BigDataKeyDto {
    @ApiProperty({ description: '数据类型' })
    @IsEnum(BigDataType)
    key: BigDataType;
}
