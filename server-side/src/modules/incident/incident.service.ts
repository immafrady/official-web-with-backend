import { Inject, Injectable } from "@nestjs/common";
import { Token_IncidentDetailRepository, Token_IncidentYearRepository } from "../../constants";
import { Repository } from "typeorm";
import { IncidentDetail, IncidentYear } from "./incident.entity";
import {DetailEditDto, YearEditDto} from "./dto";
import {
    IIncidentDetailDeleteResponse, IIncidentDetailDetailResponse, IIncidentDetailListResponse,
    IIncidentYearDeleteResponse,
    IIncidentYearListResponse, IListYearListWithoutNoDetailResult
} from "libs/response/incident";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";
import {IIncidentDetailEntity} from "libs/entity/incident";

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
            throw new ResponseError(ResponseCode.CommonItemNotFound, '无法找到该年份');
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

    /**
     * @description 判断存在该详情
     * @param id
     */
    async hasDetailOrFail(id: number): Promise<void> {
        if (!await this.incidentDetailRepo.findOne(id)) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '无法找到详情')
        }
    }

    private generateDetailFromDto(detailEditDto: DetailEditDto): IIncidentDetailEntity {
        const { id, ...dto} = detailEditDto;
        const { yearId, ...detail} = dto;
        const year = new IncidentYear();
        year.id = yearId;

        const result = this.incidentDetailRepo.create(detail);
        result.incidentYear = year;
        return result
    }

    /**
     * @description 新增详情
     * @param detailEditDto
     */
    async addDetail(detailEditDto: DetailEditDto): Promise<any> {
        await this.incidentDetailRepo.save(this.generateDetailFromDto(detailEditDto));
        return {}
    }

    /**
     * @description 编辑详情
     * @param id
     * @param detailEditDto
     */
    async editDetail(id: number, detailEditDto: DetailEditDto): Promise<any> {
        await this.incidentDetailRepo.update(id, this.generateDetailFromDto(detailEditDto));
        return {}
    }

    /**
     * @description 删除详情
     * @param id
     */
    async deleteDetail(id: number): Promise<IIncidentDetailDeleteResponse> {
        return await this.incidentDetailRepo.delete(id)
    }


    /**
     * @description 查找详情列表
     */
    async detailList(): Promise<IIncidentDetailListResponse> {
        const [list, total] = await this.incidentDetailRepo.findAndCount({
            relations: ['incidentYear'],
            order: {
                updateDate: 'DESC'
            }
        });
        return {
            list,
            total
        }
    }

    /**
     * @description 查找单条详情
     * @param id
     */
    async detailFindOne(id: number): Promise<IIncidentDetailDetailResponse> {
        return await this.incidentDetailRepo.findOne(id)
    }


    async listYearListWithoutNoDetail(): Promise<IListYearListWithoutNoDetailResult> {
        return await this.incidentYearRepo
            .createQueryBuilder('year')
            .select('year.year', 'year')
            .addSelect('year.label', 'label')
            .innerJoin('year.incidentDetails', 'detail')
            .groupBy('year.id')
            .orderBy('Max(year.sort)', 'ASC')
            .execute()
    }
}


