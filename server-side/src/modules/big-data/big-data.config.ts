import { BigDataType } from "libs/enums/big-data";
import { tCount, tDate, tMoney, tOrder, tPieData, tPieStore } from "./big-data.interface";
import { HttpException, HttpStatus } from "@nestjs/common";

interface IBigDataConfig {
    [bigDataType: string]: {
        rawValidator: any,
        raw: any,
        retFunc: any
    }
}

// 普通解析
const rawParser = value => value

// 饼图解析
const pieParser = (raws: tPieStore): tPieData => {
    const total = raws.reduce((acc, curr) => acc + curr.value, 0);
    const result: tPieData = { data: [], pieLabels: [] };
    raws.forEach(raw => {
        const percent = Math.floor(raw.value / total * 100);
        const name = raw.key + ' ' + percent + '%';
        result.data.push({
            key: name,
            value: raw.value
        })
        result.pieLabels.push(name)
    })
    return result
}

// 数字校验
const numberValidator = (value: any): void => {
    if (typeof value !== "number") {
        throw new HttpException({ message: "请输入数字类型" }, HttpStatus.BAD_REQUEST)
    }
}

// 字符串校验
const stringValidator = (value: any): void => {
    if (typeof value !== "string") {
        throw new HttpException({ message: '请输入字符串类型' }, HttpStatus.BAD_REQUEST)
    }
}

// 键值对校验
const keyValueArrayValidator = (raws: any[]): void => {
    if (!Array.isArray(raws)) throw new HttpException({ message: "需要传入一个数组" }, HttpStatus.BAD_REQUEST);
    for (let i = 0; i < raws.length; i++) {
        if (typeof raws[i].key !== "string" || typeof raws[i].value !== "number") {
            throw new HttpException({ message: `第${i}个位置的数据类型不对` }, HttpStatus.BAD_REQUEST)
        }
    }
}


export const configBigData: IBigDataConfig = {
    [BigDataType.EnterpriseCount]: {
        retFunc: rawParser,
        rawValidator: numberValidator,
        raw: 0
    }, // 服务企业数量
    [BigDataType.NationwideServiceTotalNumber]: {
        retFunc: rawParser,
        rawValidator: numberValidator,
        raw: 0
    }, // 全国累计服务人数
    [BigDataType.NationwideServiceTotalCount]: {
        retFunc: rawParser,
        rawValidator: numberValidator,
        raw: 0
    }, // 全国累计服务人次
    [BigDataType.MonthlyNewServiceCount]: {
        retFunc: (raws: { key: tDate, value: tCount }[]): { x: tDate[], y: tCount[] } => {
            const result = { x: [], y: [] };
            for (let i = raws.length - 1, count = 0; i >= 0 && count < 12; i--, count++) {
                result.x.unshift(raws[i].key);
                result.y.unshift(raws[i].value);
            }
            return result;
        },
        rawValidator: keyValueArrayValidator,
        raw: []
    }, // 月新增服务人次
    [BigDataType.RealtimePayDetail]: {
        retFunc: (config: { min: tMoney, max: tMoney, prefix: string }): { business: tOrder, amount: tMoney }[] => {
            const result = [];
            for (let i = 0; i < 50; i++) {
                result.push({
                    business: config.prefix + Math.floor(Math.random() * 1e12),
                    amount: (config.min + (config.max - config.min) * Math.random()).toFixed(2)
                })
            }
            return result
        },
        rawValidator: (raw: any): void => {
            if (typeof raw.min !== "number" || typeof raw.max !== "number" || typeof raw.prefix !== "string") {
                throw new HttpException({ message: "传参数类型错误" }, HttpStatus.BAD_REQUEST)
            }
            if (raw.min < 0 || raw.max < 0) {
                throw new HttpException({ message: "金额不能设置为负数" }, HttpStatus.BAD_REQUEST)
            }
        },
        raw: { min: 0, max: 0, prefix: '1045262' }
    }, // 实时发放明细
    [BigDataType.NationwideClientDistribution]: {
        retFunc: rawParser,
        rawValidator: stringValidator,
        raw: ''
    },  // 全国客户分布
    [BigDataType.FreelancerArealDistribution]: {
        retFunc: rawParser,
        rawValidator: stringValidator,
        raw: ''
    }, // 服务自由职业者地域分布
    [BigDataType.XinTownNationDistribution]: {
        retFunc: rawParser,
        rawValidator: stringValidator,
        raw: ''
    }, // 薪商小镇全国分布
    [BigDataType.FreelancerIndustryDistribution]: {
        retFunc: pieParser,
        rawValidator: keyValueArrayValidator,
        raw: []
    }, // 服务自由职业者行业分布
    [BigDataType.FreelancerIncomeDistribution]: {
        retFunc: pieParser,
        rawValidator: keyValueArrayValidator,
        raw: []
    }, // 自由职业者收入水平分布
}
