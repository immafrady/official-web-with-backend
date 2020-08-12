
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
import { ArticleListDto } from "./dto";
import { IArticleFindManyOptions } from "./article.interface";
import { ArticleStatus } from "libs/enums/article";
import { LessThanOrEqual, Like } from "typeorm";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { ArticleIdDto } from "./dto/article-id.dto";

@ApiTags('文章(article)')
@ApiBearerAuth()
@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @ApiOperation({ summary: '新增文章' })
    @Post('new')
    async createArticle(@Body() createArticleDto: CreateArticleDto, @UserId() userId: number): Promise<IHttpResponse<IArticleCreateResponse>> {
        try {
            return successResponse(await this.articleService.create(createArticleDto, userId), '新增文章成功');
        } catch (e) {
            throw new ArticleCannotCreateError(e);
        }
    }

    @ApiOperation({ summary: '修改文章' })
    @Put('detail/:id')
    async editArticle(@Body() editArticleDto: EditArticleDto, @UserId() userId: number, @Param() articleIdDto: ArticleIdDto): Promise<IHttpResponse<IArticleModifyResponse>> {
        const articleId = articleIdDto.id;
        await this.articleService.hasArticleOrFail(articleId);
        try {
            return successResponse(await this.articleService.edit(editArticleDto, articleId, userId), '更新文章成功');
        } catch (e) {
            throw new ArticleCannotModifyError(e);
        }
    }

    @ApiOperation({ summary: '删除文章' })
    @Delete('detail/:id')
    async deleteArticle(@Param() articleIdDto: ArticleIdDto): Promise<IHttpResponse<IArticleDeleteResponse>> {
        const articleId = articleIdDto.id;
        await this.articleService.hasArticleOrFail(articleId);
        try {
            return successResponse(await this.articleService.delete(articleId), '删除文章成功');
        } catch (e) {
            throw new ArticleCannotDeleteError(e);
        }
    }

    @ApiOperation({ summary: '切换文章状态' })
    @Put('detail/:id/status')
    async updateArticleStatus(@Param() articleIdDto: ArticleIdDto): Promise<IHttpResponse<IArticleSetStatusResponse>> {
        const articleId = articleIdDto.id;
        await this.articleService.hasArticleOrFail(articleId);
        try {
            return successResponse(await this.articleService.switchArticleStatus(articleId), '修改状态成功');
        } catch (e) {
            throw new ArticleCannotModifyError(e);
        }
    }

    @ApiOperation({ summary: '普通用户 - 获取文章列表' })
    @Get('list')
    async userArticleList(@Query() articleListDto: ArticleListDto): Promise<IHttpResponse<IArticleListResponse>> {
        try {
            const options: IArticleFindManyOptions = {
                where: {
                    status: ArticleStatus.Online,
                    modifyDate: LessThanOrEqual(new Date()),
                    type: articleListDto.type ? Like(`%${articleListDto.type}%`) : undefined
                }
            };
            const pagination: IRequestPagination = {
                page: articleListDto.page,
                size: articleListDto.size
            };
            return successResponse(await this.articleService.findMany(options, pagination, true));
        } catch (e) {
            throw new ArticleNotFoundError(e);
        }
    }

    @ApiOperation({ summary: '管理员 - 获取文章列表' })
    @Get('admin/list')
    async adminArticleList(@Query() articleListDto: ArticleListDto): Promise<IHttpResponse<IArticleListResponse>> {
        try {
            const options: IArticleFindManyOptions = {
                where: {
                    type: articleListDto.type ? Like(`%${articleListDto.type}%`) : undefined
                }
            };
            const pagination: IRequestPagination = {
                page: articleListDto.page,
                size: articleListDto.size
            };
            return successResponse(await this.articleService.findMany(options, pagination, false));
        } catch (e) {
            throw new ArticleNotFoundError(e);
        }
    }

    @ApiOperation({ summary: '普通用户 - 获取文章详情' })
    @Get('detail/:id')
    async userArticleDetail(@Param() articleIdDto: ArticleIdDto): Promise<IHttpResponse<IArticleDetailResponse>> {
        const articleId = articleIdDto.id;

        await this.articleService.hasArticleOrFail(articleId);

        const options: IArticleFindManyOptions = {
            where: {
                status: ArticleStatus.Online,
                modifyDate: LessThanOrEqual(new Date())
            }
        };

        const result = await this.articleService.findOne(articleId, options, true);

        if (result) {
            const related = await this.articleService.findRelation(articleId, options);
            // 文章计数加一
            await this.articleService.countingPlusOne(articleId);
            return successResponse({
                article: result.article,
                related,
                author: result.author
            });
        } else {
            throw new ArticleNotFoundError({}, '没有阅读权限');
        }
    }

    @ApiOperation({ summary: '管理员 - 获取文章详情' })
    @Get('admin/detail/:id')
    async adminArticleDetail(@Param() articleIdDto: ArticleIdDto): Promise<IHttpResponse<IArticleDetailResponse>> {
        const articleId = articleIdDto.id;

        await this.articleService.hasArticleOrFail(articleId);

        try {
            return successResponse(await this.articleService.findOne(articleId));
        } catch (e) {
            throw new ArticleNotFoundError(e);
        }
    }
}
