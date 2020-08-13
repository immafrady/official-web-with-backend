import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { JobDetail, JobDepartment } from './job.entity';
import { Token_JobDetailRepository, Token_JobDepartmentRepository } from '../../constants';
import { DepartmentEditDto, DetailEditDto } from "./dto";
import { IJobDepartmentListResponse } from 'libs/response/job';

@Injectable()
export class JobService {
    constructor(@Inject(Token_JobDepartmentRepository) private jobDepartmentRepo: Repository<JobDepartment>, @Inject(Token_JobDetailRepository) private jobDetailRepo: Repository<JobDetail>) {}

    /**
     * @description 新增类型
     * @param departmentEditDto
     */
    async createDepartment(departmentEditDto: DepartmentEditDto): Promise<any> {
        const type = this.jobDepartmentRepo.create(departmentEditDto);
        await this.jobDepartmentRepo.save(type);
        return {};
    }

    /**
     * @description 删除类型
     * @param id
     */
    async deleteDepartment(id: number): Promise<DeleteResult> {
        return await this.jobDepartmentRepo.delete(id);
    }

    /**
     * @description 类型列表
     */
    async getTypeList(): Promise<IJobDepartmentListResponse> {
        const [list, total] = await this.jobDepartmentRepo.findAndCount({
            order: {

            }
        });
        return {
            list,
            total
        }
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

    /**
     * @description 新增详情
     * @param detailEditDto
     */
    async createDetail(detailEditDto: DetailEditDto): Promise<any> {

    }

    /**
     * @description 编辑详情
     * @param id
     * @param detailEditDto
     */
    async editDetail(id: number, detailEditDto: DetailEditDto): Promise<any> {

    }

    /**
     * @description 详情找单条
     * @param id
     */
    async detailFindOne(id: number): Promise<any> {

    }

    /**
     * @description 详情找多条
     */
    async detailFindMany(): Promise<any> {

    }

    /**
     * @description 删除职位详情
     * @param id
     */
    async deleteDetail(id: number): Promise<DeleteResult> {
        return await this.jobDetailRepo.delete(id);
    }
}
