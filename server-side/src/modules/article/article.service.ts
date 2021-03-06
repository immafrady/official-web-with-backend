import { Inject, Injectable } from "@nestjs/common";
import { Token_ArticleRepository } from "../../constants";
import { Article } from "./article.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateArticleDto, EditArticleDto } from "./dto";
import { IArticleListResponse } from "libs/response/article";
import { ArticleRelation, IArticleFindManyOptions, IArticleFindOneResult } from "./article.interface";
import { IRequestPagination } from "libs/common";
import { cleanNoneValue } from "../../utils/clean-none-value.util";
import { handlePagination } from "../../utils/handle-pagination.util";
import { User } from "../user/user.entity";
import { ArticleStatus } from "libs/enums/article";
import { UpdateResult } from "typeorm/query-builder/result/UpdateResult";
import { ArticlePick } from "libs/entity/article";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(Token_ArticleRepository)
        private articleRepository: Repository<Article>
    ) {}

    /**
     * @description 新增文章
     * @param createArticleDto
     * @param userId
     */
    async create(createArticleDto: CreateArticleDto, userId: number): Promise<any> {
        const article = this.articleRepository.create(createArticleDto);
        const user = new User();
        user.id = userId;
        article.user = user;
        await this.articleRepository.save(article);
        return {};
    }

    /**
     * @description 编辑文章
     * @param editArticleDto
     * @param articleId
     * @param userId
     */
    async edit(editArticleDto: Partial<EditArticleDto>, articleId: number, userId: number): Promise<any> {
        const article = this.articleRepository.create(editArticleDto);
        const user = new User();
        user.id = userId;
        article.user = user;
        await this.articleRepository.update(articleId, article);
        return {};
    }

    /**
     * @description 删除文章
     * @param id
     */
    async delete(id: number): Promise<DeleteResult> {
        return await this.articleRepository.delete(id);
    }

    /**
     * @description 查找多篇文章
     * @param articleFindManyOptions
     * @param pagination
     * @param showUser
     */
    async findMany(articleFindManyOptions: IArticleFindManyOptions, pagination: IRequestPagination = {}, showUser = false): Promise<IArticleListResponse> {
        cleanNoneValue(articleFindManyOptions.where);
        const [list, total] = await this.articleRepository.findAndCount({
            select: articleFindManyOptions.select,
            where: articleFindManyOptions.where,
            relations: showUser ? ['user'] : undefined,
            order: {
                sort: 'ASC',
                modifyDate: 'DESC',
                priority: 'DESC'
            },
            ...handlePagination(pagination.size, pagination.page)
        });

        return {
            list,
            total
        };
    }

    /**
     * @description 寻找上下关系
     * @param articleId
     * @param options
     */
    async findRelation(articleId: number, options: IArticleFindManyOptions = {}): Promise<ArticleRelation> {
        const articleRelation: ArticleRelation = [null, null];
        const { list } = await this.findMany({
            select: ['id', 'title'],
            where: options.where
        });
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === Number(articleId)) {
                    articleRelation[0] = list[i - 1] as ArticlePick;
                    articleRelation[1] = list[i + 1] as ArticlePick;
                }
            }
        }
        return articleRelation;
    }

    /**
     * @description 查找单篇文章(或报错)
     * @param articleId
     * @param options
     * @param showUser
     */
    async findOneOrFail(articleId: number, options: IArticleFindManyOptions = {}, showUser = false): Promise<IArticleFindOneResult> {
        const article = await this.articleRepository.findOne(articleId, {
            where: options?.where,
            relations: showUser ? ['user'] : undefined
        });

        if (!article) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到文章');
        }

        if (article) {
            if (showUser) {
                const author = { ...article.user };
                delete article.user;

                return {
                    article,
                    author
                };
            } else {
                return {
                    article
                };
            }
        } else {
            return null;
        }
    }

    /**
     * @description 切换文章状态
     * @param id
     */
    async switchArticleStatus(id: number): Promise<UpdateResult> {
        const article = await this.articleRepository.findOne(id);
        return await this.articleRepository.update(id, {
            status: article.status === ArticleStatus.Online ? ArticleStatus.Offline : ArticleStatus.Online
        });
    }

    /**
     * @description 文章阅读数加一
     * @param id
     */
    async countingPlusOne(id: number): Promise<UpdateResult> {
        return await this.articleRepository
            .createQueryBuilder()
            .update(Article)
            .set({
                count: () => "count + 1"
            })
            .where("id = :id",{ id })
            .execute();
    }
}
