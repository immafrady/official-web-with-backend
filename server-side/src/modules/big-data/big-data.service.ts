import { Inject, Injectable } from "@nestjs/common";
import { Token_BigDataRepository } from "../../constants";
import { Repository } from "typeorm";
import { BigData } from "./big-data.entity";
import { BigDataType } from "libs/enums/big-data";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";
import { configBigData } from "./big-data.config";

@Injectable()
export class BigDataService {
    constructor(@Inject(Token_BigDataRepository) private bigDataRepo: Repository<BigData>) {}

    // 编辑
    async edit(key: BigDataType, value) {
        configBigData[key].rawValidator(value);

        return await this.bigDataRepo.update({ key }, { value: JSON.stringify(value) });
    }

    // 查找单条
    async findOneOrFail(key: BigDataType) {
        const result = await this.bigDataRepo.findOne({ key });
        if (!result) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到大数据配置');
        }
        return {
            key,
            value: BigDataService.getRawValue(key, result.value)
        };
    }

    // 查找全部(普通)
    async findAll() {
        const data = await this.bigDataRepo.find();
        const result = {};
        data.forEach(d => {
            result[d.key] = BigDataService.getRawValue(d.key, d.value);
        })
        return result;
    }

    // 查找之后，再解析成前端想要的样子
    async findAllParsed() {
        const data = await this.bigDataRepo.find();
        const result = {};
        data.forEach(d => {
            const rawValue = JSON.parse(d.value);
            result[d.key] = configBigData[d.key].retFunc(rawValue);
        })
        return result;
    }

    // 获取值
    static getRawValue(type: BigDataType, value: string): any {
        try {
            return JSON.parse(value);
        } catch (e) {
            return configBigData[type]?.raw
        }
    }

    static getTypeLabel(type: BigDataType): string {
        switch (type) {
            case BigDataType.EnterpriseCount:
                return '服务企业数量'
            case BigDataType.NationwideServiceTotalNumber:
                return '全国累计服务人数'
            case BigDataType.NationwideServiceTotalCount:
                return '全国累计服务人次'
            case BigDataType.MonthlyNewServiceCount:
                return '月新增服务人次'
            case BigDataType.RealtimePayDetail:
                return '实时发放明细'
            case BigDataType.NationwideClientDistribution:
                return '全国客户分布'
            case BigDataType.FreelancerArealDistribution:
                return '服务自由职业者地域分布'
            case BigDataType.XinTownNationDistribution:
                return '薪商小镇全国分布'
            case BigDataType.FreelancerIndustryDistribution:
                return '服务自由职业者行业分布'
            case BigDataType.FreelancerIncomeDistribution:
                return '自由职业者收入水平分布'
            default:
                return ''
        }
    }

}
