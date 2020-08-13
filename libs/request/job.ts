import { IJobDetailEntity, IJobDepartmentEntity } from "../entity/job";

// 职位类型 - 编辑/新增
export interface IJobDepartmentEditOptions extends IJobDepartmentEntity {}

// 职位
export interface IJobDetailEditOptions extends IJobDetailEntity {
    departmentId: number;
}
