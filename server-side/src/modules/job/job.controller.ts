import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { JobService } from "./job.service";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DepartmentEditDto, DepartmentIdDto } from "./dto";
import { IHttpResponse } from "libs/common";
import {
    IJobDepartmentDeleteResponse,
    IJobDepartmentDetailResponse, IJobDepartmentListResponse,
    IJobDepartmentSaveResponse
} from "libs/response/job";
import {
    JobDepartmentCannotDeleteError,
    JobDepartmentCannotModifyError,
    JobDepartmentCannotSaveError, JobDepartmentNotFoundError
} from "libs/response-error";
import { successResponse } from "../../utils/ro-builder.utils";

@ApiTags('职位招聘 - 部门')
@ApiBearerAuth()
@Controller('job/department')
export class JobDepartmentController {
    constructor(private jobService: JobService) {}

    @ApiOperation({ summary: '新增/编辑' })
    @Post('save')
    async editOrCreate(@Body() departmentEditDto: DepartmentEditDto): Promise<IHttpResponse<IJobDepartmentSaveResponse>> {
        const { id, ...dto } = departmentEditDto;
        if (id) {
            await this.jobService.hasDepartmentOrFail(id);
            try {
                return successResponse(await this.jobService.editDepartment(id, dto), '成功修改部门资料');
            } catch (e) {
                throw new JobDepartmentCannotModifyError(e);
            }
        } else {
            try {
                return successResponse(await this.jobService.createDepartment(dto), ' 成功新增部门');
            } catch (e) {
                throw new JobDepartmentCannotSaveError(e);
            }
        }
    }

    @ApiOperation({ summary: '删除' })
    @Delete('detail/:id')
    async delete(@Param() departmentIdDto: DepartmentIdDto): Promise<IHttpResponse<IJobDepartmentDeleteResponse>> {
        await this.jobService.hasDepartmentOrFail(departmentIdDto.id);
        try {
            return successResponse(await this.jobService.deleteDepartment(departmentIdDto.id), '成功删除部门');
        } catch (e) {
            throw new JobDepartmentCannotDeleteError(e);
        }
    }

    @ApiOperation({ summary: '详情' })
    @Get('detail/:id')
    async getOne(@Param() departmentIdDto: DepartmentIdDto): Promise<IHttpResponse<IJobDepartmentDetailResponse>> {
        await this.jobService.hasDepartmentOrFail(departmentIdDto.id);
        try {
            return successResponse(await this.jobService.departmentFindOne(departmentIdDto.id));
        } catch (e) {
            throw new JobDepartmentNotFoundError(e);
        }
    }

    @ApiOperation({ summary: '列表' })
    @Get('list')
    async getMany(): Promise<IHttpResponse<IJobDepartmentListResponse>> {
        try {
            return successResponse(await this.jobService.departmentFindMany());
        } catch (e) {
            throw new JobDepartmentNotFoundError(e);
        }
    }
}

@ApiTags('职位招聘 - 详情')
@ApiBearerAuth()
@Controller('job/detail')
export class JobDetailController {
    constructor(private jobService: JobService) {}

}
