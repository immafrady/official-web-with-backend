import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BigDataService } from "./big-data.service";
import { EditBigDataDto } from "./dto/edit-big-data.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../utils/ro-builder.utils";
import { BigDataKeyDto } from "./dto/big-data-key.dto";

@ApiTags('大数据')
@ApiBearerAuth()
@Controller('big-data')
export class BigDataController {
    constructor(private bigDataService: BigDataService) {}

    @ApiOperation({ summary: '编辑大数据 - 单条' })
    @Post('edit')
    async editBigData(@Body() editBigDataDto: EditBigDataDto) {
        return successResponse(await this.bigDataService.edit(editBigDataDto.key, editBigDataDto.value));
    }

    @ApiOperation({ summary: '单条' })
    @Get('detail/:key')
    async findOne(@Param() bigDataKeyDto: BigDataKeyDto) {
        return successResponse(await this.bigDataService.findOneOrFail(bigDataKeyDto.key))
    }

    @ApiOperation({ summary: '原始列表' })
    @Get('list')
    async findMany() {
        return successResponse(await this.bigDataService.findAll());
    }

    @ApiOperation({ summary: '大数据面板数据列表' })
    @Get('board/list')
    async getFormattedList() {
        return successResponse(await this.bigDataService.findAllParsed());
    }
}
