import { inject, provide } from 'midway';
import { IArticleService } from '../interfaces/article.interface';
import { SERVICE_DB, SERVICE_POST } from '../inject-token';
import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleDetailOptions,
    IArticleListOptions,
    IArticleModifyOptions,
    IArticleSetStatusOption
} from '../libs/request/article';
import {
    IArticleCreateResponse,
    IArticleDeleteResponse,
    IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse
} from '../libs/response/article';
import { Article } from '../db/entities/article';
import {
    ArticleCannotCreateError,
    ArticleCannotDeleteError,
    ArticleCannotModifyError,
    ArticleNotFoundError
} from '../libs/response-error';
import { IDb } from '../interfaces/db.interface';
import { User } from '../db/entities/user';
import { ArticlePick, IArticleEntity } from '../libs/entity/article';
import { isValidPagination } from '../utils/validator.util';
import { ArticleStatus } from '../libs/enums/article';
import { cleanNoneValue } from '../utils/clean-none-value.utils';

@provide(SERVICE_POST)
export class ArticleService implements IArticleService {

    @inject(SERVICE_DB)
    db: IDb;

    /**
     * @description 新增文章
     * @param options
     */
    async create(options: IArticleCreateOptions): Promise<IArticleCreateResponse> {
        try {
            const articleRepo = this.db.getRepository(Article)
            const article = articleRepo.create(options)

            const user = new User()
            user.id = options.userId
            article.user = user

            await articleRepo.save(article)
            return {}
        } catch (e) {
            throw new ArticleCannotCreateError(e)
        }
    }

    /**
     * @description 删除文章
     * @param options
     */
    async delete(options: IArticleDeleteOptions): Promise<IArticleDeleteResponse> {
        try {
            const articleRepo = this.db.getRepository(Article)
            return await articleRepo.delete(options.id)
        } catch (e) {
            throw new ArticleCannotDeleteError(e)
        }
    }

    /**
     * @description 文章列表
     * @param options
     * @param select    展示列
     */
    async findMany(options: IArticleListOptions, select?: (keyof IArticleEntity | "user")[]): Promise<IArticleListResponse> {
        const isShowUser = Array.isArray(select) && select.includes("user")
        const hasPagination = isValidPagination(options.page, options.size) // 是否开启分页

        try {
            const articleRepo = this.db.getRepository(Article)
            const articleOptions = articleRepo.create(options)
            cleanNoneValue(articleOptions)

            // 开启分页
            const [list, total]= await articleRepo.findAndCount({
                select,
                where: articleOptions,
                relations: isShowUser ? ["user"] : undefined,
                order: {
                    modifyDate: "DESC",
                    priority: "DESC"
                },
                skip: hasPagination ? options.size * (options.page - 1) : undefined,
                take: hasPagination ? options.size : undefined
            })


            return {
                list,
                total
            }
        } catch (e) {
            throw new ArticleNotFoundError(e)
        }
    }

    /**
     * @description 文章详情
     * @param options
     */
    async findOne(options: IArticleDetailOptions): Promise<IArticleDetailResponse> {
        // 拿单篇文章
        const articleRepo = this.db.getRepository(Article)
        const article = await articleRepo.findOne(options.id, { relations: ["user"] })
        if (!article) {
            throw new ArticleNotFoundError()
        }

        const author = article.user
        delete article.user

        delete options.id
        // 拿所有文章
        const { list } = await this.findMany(options, ['id', 'title'])

        try {
            let related: [ArticlePick, ArticlePick]
            if (list) {
                for (let i = 0; i < list.length; i++) {
                    if (list[i].id === article.id) {
                        related = [
                            list[i - 1] as ArticlePick,
                            list[i + 1] as ArticlePick
                        ]
                    }
                }
            }

            return {
                related,
                article,
                author
            }
        } catch (e) {
            throw new ArticleNotFoundError(e)
        }
     }

    /**
     * @description 修改文章
     * @param options
     */
    async modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse> {

        const articleRepo = this.db.getRepository(Article)
        const article = await articleRepo.findOne(options.id)

        if (!article) {
            throw new ArticleNotFoundError()
        }
        try {
            const modified = articleRepo.create(options)

            await articleRepo.save(modified)
            return {}
        } catch (e) {
            throw new ArticleCannotModifyError(e)
        }
    }

    /**
     * @description 修改文章状态接口
     * @param id
     */
    async setArticleStatus(id: IArticleSetStatusOption): Promise<IArticleCreateResponse> {
        const articleRepo = this.db.getRepository(Article)
        const article = await articleRepo.findOne(id)

        if (!article) {
            throw new ArticleNotFoundError()
        }

        article.status = article.status === ArticleStatus.Online ? ArticleStatus.Offline : ArticleStatus.Online

        await articleRepo.save(article)
        return {}
    }
}
