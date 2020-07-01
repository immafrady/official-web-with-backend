import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleModifyOptions, IArticleSetStatusOption
} from 'libs/request/article';
import {
    IArticleCreateResponse,
    IArticleDeleteResponse, IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse, IArticleSetStatusResponse
} from 'libs/response/article';
import { IRequestPagination } from 'libs/common';
import { Article } from '../db/entities/article';
import { IArticleEntity } from 'libs/entity/article';
import { TypeOrmFindWhere } from './db.interface';

export interface IArticleFindManyOptions extends IRequestPagination{
    where?: TypeOrmFindWhere<Article>,
    select?: (keyof IArticleEntity)[],
    showUser?: boolean
}

export interface IArticleFindOneOptions {
    id: number,
    where?: TypeOrmFindWhere<Article>,
    select?: (keyof IArticleEntity)[],
    showUser?: boolean
}

export interface IArticleService {
    create(options: IArticleCreateOptions): Promise<IArticleCreateResponse>;
    delete(options: IArticleDeleteOptions): Promise<IArticleDeleteResponse>;
    modify(options: IArticleModifyOptions): Promise<IArticleModifyResponse>;
    findMany(options: IArticleFindManyOptions): Promise<IArticleListResponse>;
    findOne(options: IArticleFindOneOptions): Promise<IArticleDetailResponse>;
    setArticleStatus(id: IArticleSetStatusOption): Promise<IArticleSetStatusResponse>;
}
