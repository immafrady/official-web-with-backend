import { provide, inject } from 'midway';
import { IArticleService } from "../interfaces/article.interface";
import { SERVICE_DB, SERVICE_POST } from "../inject-token";
import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleDetailOptions,
    IArticleListOptions, IArticleModifyOptions
} from "../../../libs/request/article";
import {
    IArticleCreateResponse,
    IArticleDeleteResponse,
    IArticleDetailResponse,
    IArticleListResponse, IArticleModifyResponse
} from "../../../libs/response/article";

@provide(SERVICE_POST)
export class ArticleService implements IArticleService {
    @inject(SERVICE_DB)
    db;

    create(options: IArticleCreateOptions): Promise<IArticleCreateResponse> {

        return Promise.resolve(undefined);
    }

    delete(options: IArticleDeleteOptions): Promise<IArticleDeleteResponse> {
        return Promise.resolve(undefined);
    }

    findMany(options: IArticleListOptions): Promise<IArticleListResponse> {
        return Promise.resolve(undefined);
    }

    findOne(options: IArticleDetailOptions): Promise<IArticleDetailResponse> {
        return Promise.resolve(undefined);
    }

    modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse> {
        const id = options.id
        if (id) {

        }
        return Promise.resolve(undefined);
    }


}
