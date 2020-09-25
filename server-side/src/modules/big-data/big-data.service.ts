import { Inject, Injectable } from "@nestjs/common";
import { Token_BigDataRepository } from "../../constants";
import { Repository } from "typeorm";
import { BigData } from "./big-data.entity";
import { BigDataType } from "libs/enums/big-data";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";

@Injectable()
export class BigDataService {
    constructor(@Inject(Token_BigDataRepository) private bigDataRepo: Repository<BigData>) {}

    // 编辑
    async edit(key: BigDataType, value) {
        return await this.bigDataRepo.update({ key }, { value });
    }

    // 查找单条
    async findOneOrFail(key: BigDataType) {
        const result = await this.bigDataRepo.findOne({ key });
        if (!result) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到大数据配置');
        }
        return result;
    }

    // 查找全部(普通)
    async findAll() {
        const data = await this.bigDataRepo.find();
        const result = {};
        data.forEach(d => {
            result[d.key] = d.value;
        })
        return data;
    }

    //
    static getValue(type: BigDataType): any {

    }

}
