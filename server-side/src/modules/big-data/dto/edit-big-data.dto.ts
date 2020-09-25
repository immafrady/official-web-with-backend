import { IBigDataEntity } from "libs/entity/big-data";
import { BigDataType } from "libs/enums/big-data";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";

export class EditBigDataDto implements Partial<IBigDataEntity>{
    @ApiProperty({ description: '大数据的键', enum: BigDataType })
    @IsEnum(BigDataType)
    key: BigDataType;

    @ApiProperty({ description: '大数据的值' })
    @IsString()
    value: string;
}
