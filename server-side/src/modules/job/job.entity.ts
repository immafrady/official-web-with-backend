import { IJobContentDetail, IJobDetailEntity, IJobDepartmentEntity } from "libs/entity/job";
import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { JobStatus } from "libs/enums/job";

@Entity()
export class JobDepartment extends BaseEntity implements IJobDepartmentEntity {
    /**
     * @description 部门名字
     */
    @Column("varchar", {
        length: 191
    })
    label: string;

    /**
     * @description 顺序
     */
    @Column("int")
    sort: number;

    @OneToMany(
        () => JobDetail,
        jobDetail => jobDetail.department
    )
    jobDetails: JobDetail[];
}

@Entity()
export class JobDetail extends BaseEntity implements IJobDetailEntity {
    /**
     * @description 职位详情
     */
    @Column("simple-json")
    content: IJobContentDetail;

    /**
     * @description 工作地
     */
    @Column("varchar", {
        length: 191
    })
    location: string;

    /**
     * @description 发布时间
     */
    @Column("datetime", {
        default: () => "CURRENT_TIMESTAMP(6)",
        precision: 6
    })
    modifyDate: Date;

    @Column("varchar", {
        length: 191
    })
    title: string;

    @ManyToOne(
        () => JobDepartment,
        jobDepartment => jobDepartment.jobDetails
    )
    @JoinColumn({ name: "department_id" })
    department: JobDepartment;

    /**
     * @description 职位状态
     */
    @Column("enum", {
        enum: JobStatus,
        default: JobStatus.Offline
    })
    status: JobStatus;

    /**
     * @description 是否急聘
     */
    @Column()
    eager: boolean;

    /**
     * @description 是否火热
     */
    @Column()
    hot: boolean;
}
