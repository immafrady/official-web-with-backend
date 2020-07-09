import { Article } from "./article.entity";
import { TypeOrmFindWhere } from "../../shared/public.interface";
import { ArticlePick } from "libs/entity/article";
import { User } from "../user/user.entity";

export interface IArticleFindManyOptions {
    where?: TypeOrmFindWhere<Article>,
    select?: (keyof Article)[]
}

export interface IArticleFindOneOptions {
    id: number,
    where?: TypeOrmFindWhere<Article>,
    select?: (keyof Article)[],
    showUser?: boolean,
    showRelation?: boolean,
}

export type ArticleRelation = [ArticlePick, ArticlePick]

export interface IArticleFindOneResult {
    article: Article,
    author?: User
}
