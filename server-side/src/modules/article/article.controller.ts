import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ArticleService } from "./article.service";
import { CreateArticleDto, EditArticleDto } from "./dto";
import { IHttpResponse, IRequestPagination } from "libs/common";
import {
    IArticleCreateResponse,
    IArticleDeleteResponse, IArticleDetailResponse,
    IArticleListResponse,
    IArticleModifyResponse, IArticleSetStatusResponse
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

    /**
     * @description 新增文章
     * @param createArticleDto
     * @param userId
     */
    @Post('new')
    async createArticle(@Body() createArticleDto: CreateArticleDto, @UserId() userId): Promise<IHttpResponse<IArticleCreateResponse>> {
        try {
            return successResponse(await this.articleService.create(createArticleDto, userId), '新增文章成功')
        } catch (e) {
            throw new ArticleCannotCreateError(e)
        }
    }

    /**
     * @description 修改文章
     * @param editArticleDto
     * @param userId
     * @param articleId
     */
    @Put('detail/:id')
    async editArticle(@Body() editArticleDto: EditArticleDto, @UserId() userId, @Param('id') articleId): Promise<IHttpResponse<IArticleModifyResponse>> {
        await this.articleService.hasArticleOrFail(articleId)
        try {
            return successResponse(await this.articleService.edit(editArticleDto, articleId, userId), '更新文章成功')
        } catch (e) {
           throw new ArticleCannotModifyError(e)
        }
    }

    /**
     * @description 删除文章
     * @param articleId
     */
    @Delete('detail/:id')
    async deleteArticle(@Param('id') articleId): Promise<IHttpResponse<IArticleDeleteResponse>> {
        await this.articleService.hasArticleOrFail(articleId)
        try {
            return successResponse(await this.articleService.delete(articleId), '删除文章成功')
        } catch (e) {
            throw new ArticleCannotDeleteError(e)
        }
    }

    /**
     * @description 切换文章状态
     * @param articleId
     */
    @Put('detail/:id/status')
    async updateArticleStatus(@Param('id') articleId): Promise<IHttpResponse<IArticleSetStatusResponse>> {
        await this.articleService.hasArticleOrFail(articleId)
        try {
            return successResponse(await this.articleService.switchArticleStatus(articleId), '修改状态成功')
        } catch (e) {
            throw new ArticleCannotModifyError(e)
        }
    }

    /**
     * @description 用户的列表
     * @param articleListDto
     */
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

    /**
     * @description 管理员的列表
     * @param articleListDto
     */
    @Get('admin/list')
    async adminArticleList(@Query() articleListDto: ArticleListDto): Promise<IHttpResponse<IArticleListResponse>> {
        try {
            const options: IArticleFindManyOptions = {
                where: {
                    type: articleListDto.type ? Like(`%${articleListDto.type}%`) : undefined
                }
            }
            const pagination: IRequestPagination = {
                page: articleListDto.page,
                size: articleListDto.size
            }
            return successResponse(await this.articleService.findMany(options, pagination, false))
        } catch (e) {
            throw new ArticleNotFoundError(e)
        }
    }

    /**
     * @description 用户看到的列表
     * @param articleId
     */
    @Get('detail/:id')
    async userArticleDetail(@Param('id') articleId): Promise<IHttpResponse<IArticleDetailResponse>> {
        await this.articleService.hasArticleOrFail(articleId);

        const options: IArticleFindManyOptions = {
            where: {
                status: ArticleStatus.Online,
                modifyDate: LessThanOrEqual(new Date())
            }
        }

        const result = await this.articleService.findOne(articleId, options, true)

        if (result) {
            const related = await this.articleService.findRelation(articleId, options)
            return successResponse({
                article: result.article,
                related,
                author: result.author
            })
        } else {
            throw new ArticleNotFoundError({}, '没有阅读权限')
        }
    }

    @Get('admin/detail/:id')
    async adminArticleDetail(@Param('id') articleId): Promise<IHttpResponse<IArticleDetailResponse>> {
        await this.articleService.hasArticleOrFail(articleId)

        try {
            return successResponse(await this.articleService.findOne(articleId))
        } catch (e) {
            throw new ArticleNotFoundError(e)
        }
    }
}
