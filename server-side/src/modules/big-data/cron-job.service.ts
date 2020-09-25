import { Inject, Injectable } from "@nestjs/common";
import { Token_BigDataRepository } from "../../constants";
import { Repository } from "typeorm";
import { BigData } from "./big-data.entity";
import { Cron } from "@nestjs/schedule";
import { BigDataType } from "libs/enums/big-data";
import { SystemLogger } from "../../global/logger/system-logger.service";

@Injectable()
export class CronJobService {
    constructor(
        @Inject(Token_BigDataRepository) private bigDataRepo: Repository<BigData>,
        private readonly logger: SystemLogger
    ) {}

    // 定时任务
    /**
     * 定时更新 全国累计服务人数
     */
    @Cron('0 */1 9-17 * * *')
    async cronUpdateTotalNumber() {
        const result = await this.handler(BigDataType.NationwideServiceTotalNumber, 1, 6);
        this.logger.log(`增加"全国累计服务人数"成功，此次新增${result.num}人，目前人数为${result.current}`, '大数据定时器')
    }

    /**
     * 定时更新 全国累计服务人次
     */
    @Cron('0 */1 9-17 * * *')
    async cronUpdateTotalCount() {
        const result = await this.handler(BigDataType.NationwideServiceTotalCount, 10, 18);
        this.logger.log(`增加"全国累计服务人次"成功，此次新增${result.num}人次，目前人数为${result.current}`, '大数据定时器')
    }

    private async handler(key: BigDataType.NationwideServiceTotalCount | BigDataType.NationwideServiceTotalNumber, start: number, end: number) {
        const res = await this.bigDataRepo.findOne({ key });
        const parsed = JSON.parse(res.value);
        const num = start + Math.floor(Math.random() * (end - start));
        const current = parsed + num
        await this.bigDataRepo.update({ key }, { value: JSON.stringify(current) });
        return {
            current,
            num
        }
    }
}
