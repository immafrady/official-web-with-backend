import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ArticleService } from "./article.service";
import { CreateArticleDto, EditArticleDto } from "./dto";
import { IHttpResponse, IRequestPagination } from "libs/common";
import {
    IArticleCreateResponse,
    IArticleDeleteResponse,
    IArticleListResponse,
    IArticleModifyResponse
} from "libs/response/article";
import {
    ArticleCannotCreateError,
    ArticleCannotDeleteError,
    ArticleCannotModifyError,
    ArticleNotFoundError
} from "libs/response-error";
import { successResponse } from "../../utils/ro-builder.utils";
import { UserId } from "../../shared/decorators/user-id.decorator";
import { ArticleListDto } from "./dto/article-list.dto";
import { IArticleFindManyOptions } from "./article.interface";
import { ArticleStatus } from "libs/enums/article";
import { LessThanOrEqual, Like } from "typeorm";

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Post('new')
    async createArticle(@Body() createArticleDto: CreateArticleDto, @UserId() userId): Promise<IHttpResponse<IArticleCreateResponse>> {
        try {
            createArticleDto.userId = userId
            return successResponse(await this.articleService.create(createArticleDto), '新增文章成功')
        } catch (e) {
            throw new ArticleCannotCreateError(e)
        }
    }

    @Put('detail/:id')
    async editArticle(@Body() editArticleDto: EditArticleDto, @UserId() userId, @Param('id') articleId): Promise<IHttpResponse<IArticleModifyResponse>> {
        if (!await this.articleService.hasArticle(articleId)) {
            throw new ArticleNotFoundError()
        }
        try {
            editArticleDto.userId = userId
            editArticleDto.id = articleId
            return successResponse(await this.articleService.edit(editArticleDto), '更新文章成功')
        } catch (e) {
           throw new ArticleCannotModifyError(e)
        }
    }

    @Delete('detail/:id')
    async deleteArticle(@Param('id') articleId): Promise<IHttpResponse<IArticleDeleteResponse>> {
        if (!await this.articleService.hasArticle(articleId)) {
            throw new ArticleNotFoundError()
        }
        try {
            return successResponse(await this.articleService.delete(articleId), '删除文章成功')
        } catch (e) {
            throw new ArticleCannotDeleteError(e)
        }
    }

    @Get('list')
    async userArticleList(@Query() articleListDto: ArticleListDto): Promise<IHttpResponse<IArticleListResponse>> {
        try {
            const options: IArticleFindManyOptions = {
                where: {
                    status: ArticleStatus.Online,
                    modifyDate: LessThanOrEqual(new Date()),
                    type: articleListDto.type ? Like(`%${articleListDto.type}%`) : undefined
                }
            }
            const pagination: IRequestPagination = {
                page: articleListDto.page,
                size: articleListDto.size
            }
            return successResponse(await this.articleService.findMany(options, pagination, true))
        } catch (e) {
            throw new ArticleNotFoundError(e)
        }
    }
}
