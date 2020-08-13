import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { JobService } from "./job.service";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DepartmentEditDto, DepartmentIdDto, DetailEditDto } from "./dto";
import { IHttpResponse } from "libs/common";
import {
    IJobDepartmentDeleteResponse,
    IJobDepartmentDetailResponse,
    IJobDepartmentListResponse,
    IJobDepartmentSaveResponse,
    IJobDetailDeleteResponse,
    IJobDetailDetailResponse,
    IJobDetailSaveResponse, IJobDetailSetStatusResponse,
    IJobListResponse
} from "libs/response/job";
import {
    JobDepartmentCannotDeleteError,
    JobDepartmentCannotModifyError,
    JobDepartmentCannotSaveError,
    JobDepartmentNotFoundError,
    JobDetailCannotDeleteError,
    JobDetailCannotModifyError,
    JobDetailCannotSaveError, JobDetailNotFoundError
} from "libs/response-error";
import { successResponse } from "../../utils/ro-builder.utils";
import { DetailIdDto } from "./dto/detail-id.dto";
import { JobStatus } from "libs/enums/job";
import { LessThanOrEqual } from "typeorm";

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

@ApiTags('职位招聘 - 具体')
@ApiBearerAuth()
@Controller('job/item')
export class JobDetailController {
    constructor(private jobService: JobService) {}

    @ApiOperation({ summary: '新增/编辑' })
    @Post('save')
    async editOrCreate(@Body() detailEditDto: DetailEditDto): Promise<IHttpResponse<IJobDetailSaveResponse>> {
        const { id, ...dto } = detailEditDto;
        if (id) {
            await this.jobService.hasDetailOrFail(id);
            try {
                return successResponse(await this.jobService.editDetail(id, dto), '成功修改职位');
            } catch (e) {
                throw new JobDetailCannotModifyError(e);
            }
        } else {
            try {
                return successResponse(await this.jobService.createDetail(dto), '成功新增职位');
            } catch (e) {
                throw new JobDetailCannotSaveError(e);
            }
        }
    }

    @ApiOperation({ summary: '删除' })
    @Delete('detail/:id')
    async delete(@Param() detailIdDto: DetailIdDto): Promise<IHttpResponse<IJobDetailDeleteResponse>> {
        await this.jobService.hasDetailOrFail(detailIdDto.id);
        try {
            return successResponse(await this.jobService.deleteDetail(detailIdDto.id), '成功删除职位');
        } catch (e) {
            throw new JobDetailCannotDeleteError(e)
        }
    }

    @ApiOperation({ summary: '详情' })
    @Get('detail/:id')
    async getOne(@Param() detailIdDto: DetailIdDto): Promise<IHttpResponse<IJobDetailDetailResponse>> {
        try {
            return successResponse(await this.jobService.detailFindOne(detailIdDto.id));
        } catch (e) {
            throw new JobDetailNotFoundError(e);
        }
    }

    @ApiOperation({ summary: '列表' })
    @Get('list')
    async getMany() {
        try {
            return successResponse(await this.jobService.detailFindMany());
        } catch (e) {
            throw new JobDetailNotFoundError(e)
        }
    }

    @ApiOperation({ summary: '上下线' })
    @Put('detail/:id/status')
    async updateDetailStatus(@Param() detailIdDto: DetailIdDto): Promise<IHttpResponse<IJobDetailSetStatusResponse>> {
        await this.jobService.hasDetailOrFail(detailIdDto.id);
        try {
            return successResponse(await this.jobService.switchJobDetailStatus(detailIdDto.id), '切换上下线成功');
        } catch (e) {
            throw new JobDetailCannotModifyError(e);
        }
    }
}

@ApiTags('加入我们 - 前端页面')
@Controller('job')
export class JobController {
    constructor(private jobService: JobService) {}

    @ApiOperation({ summary: '分类之后的列表' })
    @Get('list')
    async getFormatList(): Promise<IHttpResponse<IJobListResponse>> {
        const response: IJobListResponse = {
            departments: [], details: {}
        };

        try {
            const { list: departments } = await this.jobService.departmentFindMany();
            response.departments = departments.map(department => {
                response.details[department.label] = [];
                return department.label;
            })
        } catch (e) {
            throw new JobDepartmentNotFoundError(e);
        }

        try {
            const { list: details } = await this.jobService.detailFindMany({
                where: {
                    status: JobStatus.Online,
                    modifyDate: LessThanOrEqual(new Date())
                }
            });
            details.forEach(detail => {
              response.details[detail.department.label]?.push(detail);
            })
        } catch (e) {
            throw new JobDetailNotFoundError(e);
        }
        return successResponse(response);
    }
}
