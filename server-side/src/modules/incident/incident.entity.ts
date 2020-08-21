import {BaseEntity} from "../../shared/base.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {IIncidentDetailEntity, IIncidentYearEntity} from "libs/entity/incident";

@Entity()
export class IncidentYear extends BaseEntity implements IIncidentYearEntity{
    /**
     * @description 年份
     */
    @Column("varchar", {
        length: 191
    })
    year: string;

    /**
     * @description 排序
     */
    @Column("int")
    sort: number;

    /**
     * @description 历程概括
     */
    @Column("varchar", {
        length: 191
    })
    label: string;

    @OneToMany(type => IncidentDetail, incidentDetail => incidentDetail.incidentYear)
    incidentDetails: IncidentDetail[]
}


@Entity()
export class IncidentDetail extends BaseEntity implements IIncidentDetailEntity{
    /***
     * @description 标题
     */
    @Column("varchar", {
        length: 191
    })
    title: string;

    /**
     * @description 描述
     */
    @Column("text")
    detail: string;

    @ManyToOne(type => IncidentYear, incidentYear => incidentYear.incidentDetails)
    @JoinColumn({ name: 'year_id'})
    incidentYear: IncidentYear;

    /**
     * @description 排序
     */
    @Column("int")
    sort: number;

}
