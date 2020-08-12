import { IJobContentDetail, IJobDetailEntity, IJobTypeEntity } from "libs/entity/job";
import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class JobType extends BaseEntity implements IJobTypeEntity {
    /**
     * @description 类型名字
     */
    @Column({
        type: "varchar",
        length: 191
    })
    label: string;
}

@Entity()
export class JobDetail extends BaseEntity implements IJobDetailEntity {
    /**
     * @description 职位详情
     */
    @Column("simple-json")
    content: IJobContentDetail;

    @Column({
        type: "varchar",
        length: 191
    })
    department: string;

    /**
     * @description 工作地
     */
    @Column({
        type: "varchar",
        length: 191
    })
    location: string;

    /**
     * @description 发布时间
     */
    @Column({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP(6)",
        precision: 6
    })
    modifyDate: Date;

    @Column({
        type: "varchar",
        length: 191
    })
    title: string;

    @ManyToMany(type => JobType, )
    @JoinTable({
        name: 'job_type_to_detail',
        joinColumn: {
            referencedColumnName: 'id',
            name: 'detail_id'
        },
        inverseJoinColumn: {
            referencedColumnName: 'id',
            name: 'type_id'
        }
    })
    types: JobType[];
}
