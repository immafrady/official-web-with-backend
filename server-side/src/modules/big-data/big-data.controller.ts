import { Body, Controller, Get, Post } from "@nestjs/common";
import { BigDataService } from "./big-data.service";
import { EditBigDataDto } from "./dto/edit-big-data.dto";
import { ApiOperation } from "@nestjs/swagger";

@Controller('big-data')
export class BigDataController {
    constructor(private bigDataService: BigDataService) {}

    @ApiOperation({ summary: '编辑大数据 - 单条' })
    @Post('edit')
    async editBigData(@Body() editBigDataDto: EditBigDataDto) {

    }

    @ApiOperation({ summary: '大数据单条' })
    @Get('detail/:type')
    async findOne() {

    }

    @ApiOperation({ summary: '编辑的原始列表' })
    @Get('list')
    async findMany() {

    }

    @ApiOperation({ summary: '大数据面板数据列表' })
    @Get('board/list')
    async getFormattedList() {

    }
}
