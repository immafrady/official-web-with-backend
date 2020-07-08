import { Inject, Injectable } from '@nestjs/common';
import { Token_ArticleRepository } from "../../constants";
import { Article } from "./article.entity";
import { Repository } from "typeorm";
import { CreateArticleDto, EditArticleDto } from "./dto";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";
import { IArticleListResponse } from "libs/response/article";
import { IArticleFindManyOptions } from "./article.interface";
import { IRequestPagination } from "libs/common";
import { cleanNoneValue } from "../../utils/clean-none-value.util";
import { options } from "tsconfig-paths/lib/options";
import { handlePagination } from "../../utils/handle-pagination.util";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(Token_ArticleRepository)
        private articleRepository: Repository<Article>
    ) {}

    // 是否存在文章
    async hasArticle(id: number): Promise<boolean> {
        return !!await this.articleRepository.findOne(id)
    }

    // 新增文章
    async create(createArticleDto: CreateArticleDto): Promise<any> {
        const article = this.articleRepository.create(createArticleDto);
        await this.articleRepository.save(article);
        return {}
    }

    // 编辑文章
    async edit(editArticleDto: EditArticleDto): Promise<any> {
        const article = this.articleRepository.create(editArticleDto);
        await this.articleRepository.save(article);
        return {}
    }

    // 删除文章
    async delete(id: number): Promise<DeleteResult> {
        return await this.articleRepository.delete(id)
    }

    // 查找多篇
    async findMany(articleFindManyOptions: IArticleFindManyOptions, pagination: IRequestPagination, showUser: boolean): Promise<IArticleListResponse> {
        cleanNoneValue(articleFindManyOptions.where)
        const [list, total] = await this.articleRepository.findAndCount({
            select: articleFindManyOptions.select,
            where: articleFindManyOptions.where,
            relations: showUser ? ['user'] : undefined,
            order: {
                modifyDate: 'DESC',
                priority: 'DESC'
            },
            ...handlePagination(pagination.size, pagination.page)
        })

        return {
            list,
            total
        }
    }

    async switchArticleStatus(id: number): Promise<any> {
        const article = await this.articleRepository.findOne(id)
        article.status = article.status
    }
}
