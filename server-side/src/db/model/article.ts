import { EntityRepository, Repository } from "typeorm";
import { Article } from "../entities/article";
import { IArticleEntity } from '../../libs/entity/article';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    static createEntity (options: IArticleEntity): Article {
        const article = new Article()
        article.content = options.content
        article.modifyDate = options.modifyDate
        article.title = options.title
        article.priority = options.priority
        article.status = options.status
        article.thumbnail = options.thumbnail
        return article
    }


}
