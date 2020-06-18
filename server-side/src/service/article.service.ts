import { inject, provide } from 'midway';
import { IArticleService } from "../interfaces/article.interface";
import { SERVICE_DB, SERVICE_POST } from "../inject-token";
import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleDetailOptions,
    IArticleListOptions,
    IArticleModifyOptions
} from "../../../libs/request/article";
import {
    IArticleCreateResponse,
    IArticleDeleteResponse,
    IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse
} from "../../../libs/response/article";
import { Article } from "../db/entities/article";
import { setFieldInClass } from "../utils/set-field-in-class.util";
import {
    ArticleCannotCreateError,
    ArticleCannotDeleteError,
    ArticleCannotModifyError
} from "../../../libs/response-error";
import { IDb } from "../interfaces/db.interface";
import { User } from "../db/entities/user";

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
            const article = new Article()
            setFieldInClass(article, options)

            const user = new User()
            user.id = options.userId
            article.user = user

            await articleRepo.save(article)
            return {}
        } catch (e) {
            throw new ArticleCannotCreateError(undefined, e.stack)
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
            throw new ArticleCannotDeleteError()
        }
    }

    async findMany(options: IArticleListOptions): Promise<IArticleListResponse> {
        return Promise.resolve(undefined);
    }

    async findOne(options: IArticleDetailOptions): Promise<IArticleDetailResponse> {
        return Promise.resolve(undefined);
    }

    async modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse> {
        try {
            const articleRepo = this.db.getRepository(Article)
            const article = await articleRepo.findOne(options.id)
            setFieldInClass(article, options)

            const userRepo = this.db.getRepository(User)
            article.user = await userRepo.findOne(options.userId)

            await articleRepo.save(article)
            return {}
        } catch (e) {
            throw new ArticleCannotModifyError(e)
        }
    }


}
