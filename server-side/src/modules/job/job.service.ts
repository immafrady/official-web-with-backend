import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { JobDetail, JobType } from './job.entity';
import { Token_JobDetailRepository, Token_JobTypeRepository } from '../../constants';
import { TypeEditDto, TypeDeleteDto } from './dto';
import { IJobTypeListResponse } from 'libs/response/job';

@Injectable()
export class JobService {
    constructor(@Inject(Token_JobTypeRepository) private jobTypeRepo: Repository<JobType>, @Inject(Token_JobDetailRepository) private jobDetailRepo: Repository<JobDetail>) {}

    /**
     * @description 新增类型
     * @param typeEditDto
     */
    async createType(typeEditDto: TypeEditDto): Promise<any> {
        const type = this.jobTypeRepo.create(typeEditDto);
        await this.jobTypeRepo.save(type);
        return {};
    }

    /**
     * @description 删除类型
     * @param id
     */
    async deleteType(id: number): Promise<DeleteResult> {
        return await this.jobTypeRepo.delete(id);
    }

    /**
     * @description 类型列表
     */
    async getTypeList(): Promise<IJobTypeListResponse> {
        const [list, total] = await this.jobTypeRepo.findAndCount();
        return {
            list,
            total
        }
    }

    /**
     * @description 编辑类型
     * @param id
     * @param typeEditDto
     */
    async editType(id: number, typeEditDto: TypeEditDto): Promise<any> {
        await this.jobTypeRepo.update(id, typeEditDto);
        return {}
    }
}
