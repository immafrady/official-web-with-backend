import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { JobDepartment, JobDetail } from "./job.entity";
import { Token_JobDepartmentRepository, Token_JobDetailRepository } from "../../constants";
import { DepartmentEditDto, DetailEditDto } from "./dto";
import {
    IJobDepartmentDeleteResponse,
    IJobDepartmentDetailResponse,
    IJobDepartmentListResponse,
    IJobDetailDeleteResponse,
    IJobDetailListResponse,
    IJobDetailSetStatusResponse
} from "libs/response/job";
import { IJobDetailEntity } from "libs/entity/job";
import { JobStatus } from "libs/enums/job";
import { IJobDepartmentListWithoutNoDetailResult, IJobDetailFindManyOptions } from "./job.interface";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";

@Injectable()
export class JobService {
    constructor(@Inject(Token_JobDepartmentRepository) private jobDepartmentRepo: Repository<JobDepartment>, @Inject(Token_JobDetailRepository) private jobDetailRepo: Repository<JobDetail>) {}

    /**
     * @description 判断是否存在部门
     * @param id
     */
    async hasDepartmentOrFail(id: number): Promise<void> {
        if (!await this.jobDepartmentRepo.findOne(id)) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到部门');
        }
    }

    /**
     * @description 新增部门
     * @param departmentEditDto
     */
    async createDepartment(departmentEditDto: DepartmentEditDto): Promise<any> {
        const type = this.jobDepartmentRepo.create(departmentEditDto);
        await this.jobDepartmentRepo.save(type);
        return {};
    }

    /**
     * @description 删除部门
     * @param id
     */
    async deleteDepartment(id: number): Promise<IJobDepartmentDeleteResponse> {
        return await this.jobDepartmentRepo.delete(id);
    }

    /**
     * @description 部门列表
     */
    async departmentFindMany(): Promise<IJobDepartmentListResponse> {
        const [list, total] = await this.jobDepartmentRepo.findAndCount({
            order: {
                sort: "ASC",
                updateDate: "DESC",
            }
        });
        return {
            list,
            total
        };
    }

    /**
     * @description 查找单个部门
     * @param id
     */
    async departmentFindOne(id: number): Promise<IJobDepartmentDetailResponse> {
        return await this.jobDepartmentRepo.findOne(id);
    }

    /**
     * @description 编辑类型
     * @param id
     * @param departmentEditDto
     */
    async editDepartment(id: number, departmentEditDto: DepartmentEditDto): Promise<any> {
        await this.jobDepartmentRepo.update(id, departmentEditDto);
        return {}
    }

    /* --------------- 职位详情 ---------------- */
    generateDetailFromDto(detailEditDto: DetailEditDto): IJobDetailEntity {
        const { id, ...dto } = detailEditDto;
        const { departmentId, ...detail } = dto;
        const department = new JobDepartment();
        department.id = departmentId;

        const result = this.jobDetailRepo.create(detail);
        result.department = department;
        return result;
    }

    /**
     * @description 判断是否存在详情
     * @param id
     */
    async hasDetailOrFail(id: number): Promise<void> {
        if (!await this.jobDetailRepo.findOne(id)) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到职位详情');
        }
    }

    /**
     * @description 新增详情
     * @param detailEditDto
     */
    async createDetail(detailEditDto: DetailEditDto): Promise<any> {
        await this.jobDetailRepo.save(this.generateDetailFromDto(detailEditDto));
        return {}
    }

    /**
     * @description 编辑详情
     * @param id
     * @param detailEditDto
     */
    async editDetail(id: number, detailEditDto: DetailEditDto): Promise<any> {
        await this.jobDetailRepo.update(id, this.generateDetailFromDto(detailEditDto));
        return {}
    }

    /**
     * @description 详情找单条
     * @param id
     */
    async detailFindOne(id: number): Promise<any> {
        return await this.jobDetailRepo.findOne(id, {
            relations: ['department']
        });
    }

    /**
     * @description 详情找多条
     */
    async detailFindMany(jobDetailFindManyOptions?: IJobDetailFindManyOptions): Promise<IJobDetailListResponse> {
        const [list, total] = await this.jobDetailRepo.findAndCount({
            relations: ['department'],
            where: jobDetailFindManyOptions?.where
        })
        return {
            list,
            total
        }
    }

    /**
     * @description 切换职位上下线
     * @param id
     */
    async switchJobDetailStatus(id: number): Promise<IJobDetailSetStatusResponse> {
        const detail = await this.jobDetailRepo.findOne(id);
        return await this.jobDetailRepo.update(id, {
            status: detail.status === JobStatus.Online ? JobStatus.Offline : JobStatus.Online
        })
    }

    /**
     * @description 删除职位详情
     * @param id
     */
    async deleteDetail(id: number): Promise<IJobDetailDeleteResponse> {
        return await this.jobDetailRepo.delete(id);
    }

    /**
     * @description 查出有数据的部门
     */
    async listDepartmentWithoutNoDetail(): Promise<IJobDepartmentListWithoutNoDetailResult> {
        return await this.jobDepartmentRepo
            .createQueryBuilder("department")
            .select("department.label", "label")
            .innerJoin("department.jobDetails", "detail")
            .where("department.id = detail.department_id")
            .groupBy("department.id")
            .orderBy("MAX(department.sort)", "ASC")
            .execute()
    }
}
