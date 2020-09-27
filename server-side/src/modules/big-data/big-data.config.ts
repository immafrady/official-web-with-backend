import { BigDataType } from "libs/enums/big-data";
import { tCount, tDate, tMoney, tOrder, tPieData, tPieStore } from "./big-data.interface";

interface IBigDataConfig {
    [bigDataType: string]: {
        ret: any,
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


export const configBigData: IBigDataConfig = {
    [BigDataType.EnterpriseCount]: {
        ret: 0,
        retFunc: rawParser,
        raw: 0
    }, // 服务企业数量
    [BigDataType.NationwideServiceTotalNumber]: {
        ret: 0,
        retFunc: rawParser,
        raw: 0
    }, // 全国累计服务人数
    [BigDataType.NationwideServiceTotalCount]: {
        ret: 0,
        retFunc: rawParser,
        raw: 0
    }, // 全国累计服务人次
    [BigDataType.MonthlyNewServiceCount]: {
        ret: { x: [], y: [] },
        retFunc: (raw: { key: tDate, value: tCount }[]): { x: tDate[], y: tCount[] } => {
            const result = { x: [], y: [] };
            for (let i = raw.length - 1, count = 0; i >= 0 && count < 12; i--, count++) {
                result.x.unshift(raw[i].key);
                result.y.unshift(raw[i].value);
            }
            return result;
        },
        raw: []
    }, // 月新增服务人次
    [BigDataType.RealtimePayDetail]: {
        ret: [],
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
        raw: { min: 0, max: 0, prefix: '1045262' }
    }, // 实时发放明细
    [BigDataType.NationwideClientDistribution]: {
        ret: '',
        retFunc: rawParser,
        raw: ''
    },  // 全国客户分布
    [BigDataType.FreelancerArealDistribution]: {
        ret: '',
        retFunc: rawParser,
        raw: ''
    }, // 服务自由职业者地域分布
    [BigDataType.XinTownNationDistribution]: {
        ret: '',
        retFunc: rawParser,
        raw: ''
    }, // 薪商小镇全国分布
    [BigDataType.FreelancerIndustryDistribution]: {
        ret: {
            data: [],
            pieLabels: []
        },
        retFunc: pieParser,
        raw: []
    }, // 服务自由职业者行业分布
    [BigDataType.FreelancerIncomeDistribution]: {
        ret: {
            data: [],
            pieLabels: []
        },
        retFunc: pieParser,
        raw: []
    }, // 自由职业者收入水平分布
}
