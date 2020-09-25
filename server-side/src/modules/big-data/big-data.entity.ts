import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { IBigDataEntity } from "libs/entity/big-data";
import { BigDataType } from "libs/enums/big-data";

@Entity({ name: 'big_data' })
export class BigData extends BaseEntity implements IBigDataEntity {
    @Column( {
        length: 100,
        unique: true
    })
    key: BigDataType;

    @Column('mediumtext')
    value: string;
}
