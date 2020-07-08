import { Article } from "./article.entity";
import { TypeOrmFindWhere } from "../../shared/public.interface";

export interface IArticleFindManyOptions {
    where?: TypeOrmFindWhere<Article>,
    select?: (keyof Article)[]
}
