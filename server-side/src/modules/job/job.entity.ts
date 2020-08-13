import { IJobContentDetail, IJobDetailEntity, IJobDepartmentEntity } from "libs/entity/job";
import { BaseEntity } from "../../shared/base.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { JobStatus } from "libs/enums/job";

@Entity()
export class JobDepartment extends BaseEntity implements IJobDepartmentEntity {
    /**
     * @description 部门名字
     */
    @Column({
        type: "varchar",
        length: 191
    })
    label: string;

    /**
     * @description 顺序
     */
    @Column({
        type: "int"
    })
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

    @ManyToOne(
        () => JobDepartment,
        jobDepartment => jobDepartment.jobDetails
    )
    @JoinColumn({ name: "department_id" })
    department: JobDepartment;

    /**
     * @description 职位状态
     */
    @Column({
        type: "enum",
        enum: JobStatus,
        default: JobStatus.Offline
    })
    status: JobStatus;
}
