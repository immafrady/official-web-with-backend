import {
    IArticleCreateOptions,
    IArticleDeleteOptions, IArticleDetailOptions,
    IArticleListOptions,
    IArticleModifyOptions
} from "../../../libs/request/article";
import {
    IArticleCreateResponse,
    IArticleDeleteResponse, IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse
} from "../../../libs/response/article";

export interface IArticleService {
    create(options: IArticleCreateOptions): Promise<IArticleCreateResponse>;
    delete(options: IArticleDeleteOptions): Promise<IArticleDeleteResponse>;
    modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse>;
    findMany(options: IArticleListOptions): Promise<IArticleListResponse>;
    findOne(options: IArticleDetailOptions): Promise<IArticleDetailResponse>;
}
