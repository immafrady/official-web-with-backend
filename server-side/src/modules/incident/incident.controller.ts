import { Body, Controller, Post } from "@nestjs/common";
import { IncidentService } from "./incident.service";
import { YearEditDto } from "./dto";
import { IHttpResponse } from "libs/common";
import { IIncidentYearSaveResponse } from "libs/response/incident";
import { successResponse } from "../../utils/ro-builder.utils";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";

@ApiTags('加入我们 - 历史大事件年份')
@ApiBearerAuth()
@Controller('incident/year')
export class IncidentYearController {
    constructor(
        private incidentService: IncidentService
    ) {}

    @ApiOperation({ summary: '新增/编辑'})
    @Post('save')
    async incidentYearSave(@Body() yearEditDto: YearEditDto): Promise<IHttpResponse<IIncidentYearSaveResponse>> {
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

}
