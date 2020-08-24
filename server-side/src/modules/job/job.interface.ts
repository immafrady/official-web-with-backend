import { TypeOrmFindWhere } from "../../shared/public.interface";
import { Article } from "../article/article.entity";

export interface IJobDetailFindManyOptions {
    where?: TypeOrmFindWhere<Article>
}

export type IJobDepartmentListWithoutNoDetailResult = { label: string }[]
