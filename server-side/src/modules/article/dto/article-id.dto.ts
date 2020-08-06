import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ArticleIdDto {
    @ApiProperty({ description: '文章Id' })
    @IsNumberString()
    readonly id: number;
}
