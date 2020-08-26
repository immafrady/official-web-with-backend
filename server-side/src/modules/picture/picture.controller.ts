import { Controller, Post, Body, Param, Put, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { PictureService } from "./picture.service";
import { DeletePictureDto, EditPictureDto, PictureIdDto, PictureListDto, SavePictureDto } from "./dto";
import { UserId } from "../../shared/decorators/user-id.decorator";
import { IHttpResponse, IRequestPagination } from "libs/common";
import { successResponse } from "../../utils/ro-builder.utils";
import {
    IPictureDeleteResponse,
    IPictureDetailResponse,
    IPictureEditResponse, IPictureListResponse,
    IPictureSaveResponse
} from "libs/response/picture";
import { IPictureFindManyOptions } from "./picture.interface";
import { ResponseError } from "../../shared/response-error";
import { ResponseCode } from "libs/response-code";
import { MoreThanOrEqual } from "typeorm";
import { SortPictureDto } from "./dto/sort-picture.dto";

@ApiTags('图片(picture)')
@ApiBearerAuth()
@Controller('picture')
export class PictureController {
    constructor(private pictureService: PictureService) {}

    @ApiOperation({ summary: '保存图片们' })
    @Post('save')
    async createPictures(@Body() savePictureDto: SavePictureDto, @UserId() userId: number): Promise<IHttpResponse<IPictureSaveResponse>> {
        try {
            return successResponse(await this.pictureService.create(savePictureDto, userId), '保存图片成功');
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonEditCannotCreate, '无法保存图片', e);
        }
    }

    @ApiOperation({ summary: '修改图片信息' })
    @Put('detail/:id')
    async editPicture(@Body() editPictureDto: EditPictureDto, @UserId() userId: number, @Param() pictureIdDto: PictureIdDto): Promise<IHttpResponse<IPictureEditResponse>> {
        await this.pictureService.findOneOrFail(pictureIdDto.id);
        try {
            return successResponse(await this.pictureService.edit(editPictureDto, pictureIdDto.id, userId), '修改图片信息成功');
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonEditCannotModify, '无法修改图片', e);
        }
    }

    @ApiOperation({ summary: '批量删除图片' })
    @Put('delete')
    async deletePictures(@Body() deletePictureDto: DeletePictureDto): Promise<IHttpResponse<IPictureDeleteResponse>> {
        const res = {
            total: deletePictureDto.ids.length,
            affected: 0
        }
        try {
            for (let i = 0; i < res.total; i++) {
                const result = await this.pictureService.delete(deletePictureDto.ids[i])
                res.affected += result.affected
            }
            return successResponse(res, '成功删除图片');
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonEditCannotDelete, '无法删除图片', e);
        }
    }

    @ApiOperation({ summary: '获取图片详情' })
    @Get('detail/:id')
    async adminPictureDetail(@Param() pictureIdDto: PictureIdDto): Promise<IHttpResponse<IPictureDetailResponse>> {
        return successResponse(await this.pictureService.findOneOrFail(pictureIdDto.id));
    }

    @ApiOperation({ summary: '修改图片排序' })
    @Put('detail/:id/sort')
    async updateArticleSort(@Param() pictureIdDto: PictureIdDto, @Body() sortPictureDto: SortPictureDto, @UserId() userId: number) {
        await this.pictureService.findOneOrFail(pictureIdDto.id);
        try {
            return successResponse(await this.pictureService.edit(sortPictureDto, pictureIdDto.id, userId), '更新图片排序成功');
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonEditCannotModify, '无法修改图片排序', e);
        }
    }

    @ApiOperation({ summary: '图片列表' })
    @Get('list')
    async adminPictureList(@Query() pictureListDto: PictureListDto): Promise<IHttpResponse<IPictureListResponse>> {
        try {
            const options: IPictureFindManyOptions = {
                where: {
                    type: pictureListDto.type || undefined,
                    priority: pictureListDto.priority ? MoreThanOrEqual(pictureListDto.priority) : undefined
                }
            }
            let pagination: IRequestPagination
            if (pictureListDto.size) {
                pagination = {
                    page: pictureListDto.page,
                    size: pictureListDto.size
                }
            }

            return successResponse(await this.pictureService.findMany(options, pagination))
        } catch (e) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到图片', e);
        }
    }
}
