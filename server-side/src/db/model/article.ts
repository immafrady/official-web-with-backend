import { EntityRepository, Repository } from "typeorm";
import { Article } from "../entities/article";
// import { IArticleEntity } from 'libs/entity/article';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {

}
