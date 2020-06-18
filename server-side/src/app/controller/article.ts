import { controller, provide, inject, post, put, del, get } from 'midway'
import { MIDDLEWARE_JWT, SERVICE_POST } from "../../inject-token";
import {
    IArticleCreateOptions,
    IArticleDeleteOptions,
    IArticleDetailOptions, IArticleListOptions,
    IArticleModifyOptions
} from "../../../../libs/request/article";
import { IHttpResponse } from "../../../../libs/common";
import {
    IArticleCreateResponse, IArticleDeleteResponse,
    IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse
} from "../../../../libs/response/article";
import { successResponse } from "../../utils/response-builder.util";
import { getIdFromHeader } from "../../utils/get-id-from-header.util";
import { IArticleService } from "../../interfaces/article.interface";

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

    @get('/detail/:id')
    async get(): Promise<IHttpResponse<IArticleDetailResponse>> {
        const options: IArticleDetailOptions = {
            id: this.ctx.params?.id,
            ...this.ctx.request?.query
        }
        return successResponse(await this.service.findOne(options), '')
    }

    @get('/list')
    async getList(): Promise<IHttpResponse<IArticleListResponse>> {
        const options: IArticleListOptions = {
            ...this.ctx.request?.query
        }
        return successResponse(await this.service.findMany(options), '')
    }
}
