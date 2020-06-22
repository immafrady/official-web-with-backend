import {
    IArticleCreateOptions,
    IArticleDeleteOptions, IArticleDetailOptions,
    IArticleListOptions,
    IArticleModifyOptions, IArticleSetStatusOption
} from '../../../libs/request/article';
import {
    IArticleCreateResponse,
    IArticleDeleteResponse, IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse, IArticleSetStatusResponse
} from '../../../libs/response/article';
import { IArticleEntity } from "../../../libs/entity/article";

export interface IArticleService {
    create(options: IArticleCreateOptions): Promise<IArticleCreateResponse>;
    delete(options: IArticleDeleteOptions): Promise<IArticleDeleteResponse>;
    modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse>;
    findMany(options: IArticleListOptions, select?: (keyof IArticleEntity)[]): Promise<IArticleListResponse>;
    findOne(options: IArticleDetailOptions): Promise<IArticleDetailResponse>;
    setArticleStatus(id: IArticleSetStatusOption): Promise<IArticleSetStatusResponse>;
}
