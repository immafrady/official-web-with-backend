import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {IncidentService} from "./incident.service";
import {DetailEditDto, DetailIdDto, YearEditDto, YearIdDto} from "./dto";
import {IHttpResponse} from "libs/common";
import {
    IIncidentDetailDeleteResponse,
    IIncidentDetailDetailResponse,
    IIncidentDetailListResponse,
    IIncidentDetailSaveResponse,
    IIncidentListResponse,
    IIncidentYearDeleteResponse,
    IIncidentYearListResponse,
    IIncidentYearSaveResponse
} from "libs/response/incident";
import {successResponse} from "../../utils/ro-builder.utils";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ResponseError} from "../../shared/response-error";
import {ResponseCode} from "libs/response-code";

@ApiTags('关于我们 - 历史大事件年份')
@ApiBearerAuth()
@Controller('incident/year')
export class IncidentYearController {
    constructor(
        private incidentService: IncidentService
    ) {}

    @ApiOperation({ summary: '新增/编辑'})
    @Post('save')
    async yearSave(@Body() yearEditDto: YearEditDto): Promise<IHttpResponse<IIncidentYearSaveResponse>> {
        const { id, ...dto } = yearEditDto;
        if(id) {
            await this.incidentService.hasYearOrFail(id);
            try {
                return successResponse(await this.incidentService.editYear(id, dto), '成功修改年份')
            } catch (e) {
                throw new ResponseError(ResponseCode.CommonEditCannotModify, '无法修改年份', e)
            }
        } else {
            try {
                return successResponse(await this.incidentService.addYear(dto), '成功新增年份')
            } catch (e) {
                throw new ResponseError(ResponseCode.CommonEditCannotCreate, '无法新增年份', e);
            }
        }
    }

    @ApiOperation({ summary: '删除'})
    @Delete('detail/:id')
    async yearDelete(@Param() yearIdDto: YearIdDto): Promise<IHttpResponse<IIncidentYearDeleteResponse>> {
        await this.incidentService.hasYearOrFail(yearIdDto.id);
        try {
            return successResponse(await this.incidentService.deleteYear(yearIdDto.id), '成功删除年份');
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonEditCannotDelete, '无法删除年份', e)
        }
    }

    @ApiOperation({ summary: '列表' })
    @Get('list')
    async getMany(): Promise<IHttpResponse<IIncidentYearListResponse>> {
        try {
            return successResponse(await this.incidentService.yearList())
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到年份', e)
        }
    }
}

@ApiTags('关于我们 - 企业大事件内容')
@ApiBearerAuth()
@Controller('incident/item')
export class IncidentDetailController {

    constructor(private incidentService: IncidentService) {}

    @ApiOperation({ summary: '新增/修改事件内容'})
    @Post('save')
    async detailSave(@Body() detailEditDto: DetailEditDto): Promise<IHttpResponse<IIncidentDetailSaveResponse>> {
        const { id, ...dto } = detailEditDto;

        if (id) {
            await this.incidentService.hasDetailOrFail(id);
            try {
                return successResponse(await this.incidentService.editDetail(id, dto), '成功修改事件内容')
            } catch (e) {
                throw new ResponseError(ResponseCode.CommonEditCannotModify, '无法修改事件内容', e)
            }
        } else {
            try {
                return successResponse(await this.incidentService.addDeatil(dto), '成功新增内容')
            } catch (e) {
                throw new ResponseError(ResponseCode.CommonEditCannotCreate, '无法新增内容', e)
            }
        }
    }

    @ApiOperation({ summary: '删除事件内容' })
    @Delete('detail/:id')
    async deleteDetail(@Param() detailIdDto: DetailIdDto): Promise<IHttpResponse<IIncidentDetailDeleteResponse>> {
        await this.incidentService.hasDetailOrFail(detailIdDto.id);
        try {
            return successResponse(await this.incidentService.deleteDetail(detailIdDto.id), '成功删除事件内容')
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonEditCannotDelete, '无法删除事件内容', e)
        }
    }

    @ApiOperation({ summary: '获取单条事件内容' })
    @Get('detail/:id')
    async getOne(@Param() detailIdDto: DetailIdDto): Promise<IHttpResponse<IIncidentDetailDetailResponse>> {
        await this.incidentService.hasDetailOrFail(detailIdDto.id);
        return successResponse(await this.incidentService.detailFindOne(detailIdDto.id))
    }

    @ApiOperation({ summary: '获取事件列表' })
    @Get('list')
    async getMany(): Promise<IHttpResponse<IIncidentDetailListResponse>> {
        try {
            return successResponse(await this.incidentService.detailList())
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '无法查找事件详情列表', e)
        }
    }
}

@ApiTags('关于我们 - 前端')
@Controller('incident')
export class IncidentController {
    constructor(
      private incidentService: IncidentService
    ) {}

    @ApiOperation({ summary: '事件整理后的列表'})
    @Get('list')
    async getFormatList(): Promise<IHttpResponse<IIncidentListResponse>> {
        const response: IIncidentListResponse = {
            yearList: [],
            details: {}
        };
        try {
            response.yearList = await this.incidentService.listYearListWithoutNoDetail();
            response.yearList.forEach(year => {
                response.details[year.year] = [];
            })
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonItemNotFound,  '找不到年份')
        }

        try {
            const { list: details } = await this.incidentService.detailList();
            details.forEach(detail => {
                response.details[detail.incidentYear.year]?.push(detail)
            })
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到事件内容')
        }
        return successResponse(response)
    }
}

