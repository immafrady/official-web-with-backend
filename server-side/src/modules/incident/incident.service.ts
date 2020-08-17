import {Inject, Injectable} from '@nestjs/common';
import {Token_IncidentDetailRepository, Token_IncidentYearRepository} from "../../constants";
import {Repository} from "typeorm";
import {IncidentDetail, IncidentYear} from "./incident.entity";
import {YearEditDto} from "./dto";
import {IIncidentYearDeleteResponse, IIncidentYearListResponse} from "libs/response/incident";
import {IncidentYearNotFoundError} from "libs/response-error";

@Injectable()
export class IncidentService {

    constructor(
        @Inject(Token_IncidentYearRepository) private incidentYearRepo: Repository<IncidentYear>,
        @Inject(Token_IncidentDetailRepository) private incidentDetailRepo: Repository<IncidentDetail>
    ) {}

    /**
     * 判断是否存在这个年份
     */
    async hasYearOrFail(id: number): Promise<void> {
        if (!await this.incidentYearRepo.findOne(id)) {
            throw new IncidentYearNotFoundError();
        }
    }

    /**
     * 新增年份
     * @param yearEditDto
     */
    async addYear(yearEditDto: YearEditDto): Promise<any> {
        const year = this.incidentYearRepo.create(yearEditDto);
        await this.incidentYearRepo.save(year);
        return {}
    }

    /**
     * 删除年份
     * @param id
     */
    async deleteYear(id: number): Promise<IIncidentYearDeleteResponse> {
        return await this.incidentYearRepo.delete(id);
    }

    /**
     * 编辑年份
     * @param id
     * @param yearEditDto
     */
    async editYear(id: number, yearEditDto: YearEditDto): Promise<any> {
        await this.incidentYearRepo.update(id, yearEditDto);
        return {}
    }

    /**
     * 获取年份列表
     */
    async yearList(): Promise<IIncidentYearListResponse> {
        const [list, total] = await this.incidentYearRepo.findAndCount({
            order: {
                sort: 'ASC',
                updateDate: "DESC"
            }
        });
        return {
            list,
            total
        }
    }
}
