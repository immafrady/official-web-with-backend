import { controller, del, get, inject, post, provide, put } from 'midway';
import { MIDDLEWARE_JWT, SERVICE_POST } from '../../inject-token';
import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleDetailOptions,
    IArticleListOptions,
    IArticleModifyOptions
} from 'libs/request/article';
import { IHttpResponse } from 'libs/common';
import {
    IArticleCreateResponse,
    IArticleDeleteResponse,
    IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse,
    IArticleSetStatusResponse
} from 'libs/response/article';
import { successResponse } from '../../utils/response-builder.util';
import { getIdFromHeader } from '../../utils/get-id-from-header.util';
import { IArticleService } from '../../interfaces/article.interface';
import { ArticleStatus } from 'libs/enums/article';
import { LessThanOrEqual } from 'typeorm';

@provide()
@controller('/article')
export class ArticleController {
    @inject()
    ctx;
    @inject(SERVICE_POST)
    service: IArticleService;

    @post('/new', { middleware: [MIDDLEWARE_JWT] })
    async create(): Promise<IHttpResponse<IArticleCreateResponse>> {
        const options: IArticleCreateOptions = this.ctx.request.body
        options.userId = getIdFromHeader(this.ctx)
        return successResponse(await this.service.create(options), '添加成功')
    }

    @put('/detail/:id', { middleware: [MIDDLEWARE_JWT] })
    async modify(): Promise<IHttpResponse<IArticleModifyResponse>> {
        const options: IArticleModifyOptions = {
            id: this.ctx.params?.id,
            userId: getIdFromHeader(this.ctx),
            ...this.ctx.request?.body
        }
        return successResponse(await this.service.modify(options), '修改成功')
    }

    @del('/detail/:id', { middleware: [MIDDLEWARE_JWT] })
    async delete(): Promise<IHttpResponse<IArticleDeleteResponse>> {
        const options: IArticleDeleteOptions = {
            id: this.ctx.params?.id
        }
        return successResponse(await this.service.delete(options), '删除成功')
    }

    @put('/detail/:id/status', { middleware: [MIDDLEWARE_JWT] })
    async updateArticleStatus(): Promise<IHttpResponse<IArticleSetStatusResponse>> {
        return successResponse(await this.service.setArticleStatus(this.ctx.request?.query?.id), '更改成功')
    }

    // 只能查上线的
    @get('/detail/:id')
    async getDetailUser(): Promise<IHttpResponse<IArticleDetailResponse>> {
        const options: IArticleDetailOptions = {
            id: this.ctx.params?.id,
            ...this.ctx.request?.query,
            status: ArticleStatus.Online,
            modifyDate: LessThanOrEqual(new Date())
        }
        return successResponse(await this.service.findOne(options), '')
    }

    // 管理员查全部
    @get('/admin/detail/:id', { middleware: [MIDDLEWARE_JWT] })
    async getDetailAdmin(): Promise<IHttpResponse<IArticleDetailResponse>> {
        const options: IArticleDetailOptions = {
            id: this.ctx.params?.id,
            ...this.ctx.request?.query
        }
        return successResponse(await this.service.findOne(options), '')
    }

    // 只能查上线的
    @get('/list')
    async getListUser(): Promise<IHttpResponse<IArticleListResponse>> {
        const options: IArticleListOptions = {
            ...this.ctx.request?.query,
            status: ArticleStatus.Online,
            modifyDate: LessThanOrEqual(new Date())
        }
        return successResponse(await this.service.findMany(options), '')
    }

    @get('/admin/list', { middleware: [MIDDLEWARE_JWT] })
    async getListAdmin(): Promise<IHttpResponse<IArticleListResponse>> {
        const options: IArticleListOptions = {
            ...this.ctx.request?.query
        }
        return successResponse(await this.service.findMany(options), '')
    }
}
