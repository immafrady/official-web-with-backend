import { controller, provide, inject, post, put, del, get } from 'midway'
import { MIDDLEWARE_JWT, SERVICE_POST } from "../../inject-token";
import {
    IPostCreateOptions,
    IPostDeleteOptions,
    IPostDetailOptions, IPostListOptions,
    IPostModifyOptions
} from "../../../../libs/request/post";
import { IHttpResponse } from "../../../../libs/common";
import {
    IPostCreateResponse,
    IPostDetailResponse,
    IPostListResponse,
    IPostModifyResponse
} from "../../../../libs/response/post";
import { successResponse } from "../../utils/response-builder.util";
import { getIdFromHeader } from "../../utils/get-id-from-header.util";
import { IPostService } from "../../interfaces/post.interface";

@provide()
@controller('/post')
export class PostController {
    @inject()
    ctx;
    @inject(SERVICE_POST)
    service: IPostService;

    @post('/new', { middleware: [MIDDLEWARE_JWT] })
    async create(): Promise<IHttpResponse<IPostCreateResponse>> {
        const options: IPostCreateOptions = this.ctx.request.body
        options.userId = getIdFromHeader(this.ctx)
        return successResponse(await this.service.create(options), '添加成功')
    }

    @put('/detail/:id', { middleware: [MIDDLEWARE_JWT] })
    async modify(): Promise<IHttpResponse<IPostModifyResponse>> {
        const options: IPostModifyOptions = {
            id: this.ctx.params?.id,
            userId: getIdFromHeader(this.ctx),
            ...this.ctx.request?.body
        }
        return successResponse(await this.service.modify(options), '修改成功')
    }

    @del('/detail/:id', { middleware: [MIDDLEWARE_JWT] })
    async delete(): Promise<IHttpResponse<IPostDetailResponse>> {
        const options: IPostDeleteOptions = {
            id: this.ctx.params?.id
        }
        return successResponse(await this.service.delete(options), '删除成功')
    }

    @get('/detail/:id', { middleware: [MIDDLEWARE_JWT] })
    async get(): Promise<IHttpResponse<IPostDetailResponse>> {
        const options: IPostDetailOptions = {
            id: this.ctx.params?.id,
            ...this.ctx.request?.query
        }
        return successResponse(await this.service.findOne(options), '')
    }

    @get('/list')
    async getList(): Promise<IHttpResponse<IPostListResponse>> {
        const options: IPostListOptions = {
            ...this.ctx.request?.query
        }
        return successResponse(await this.service.findMany(options), '')
    }
}
