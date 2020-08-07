import { Controller, Post, Body, Param, Put, Delete, Get, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { PictureService } from "./picture.service";
import { DeletePictureDto, EditPictureDto, PictureIdDto, PictureListDto, SavePictureDto } from "./dto";
import { UserId } from "../../shared/decorators/user-id.decorator";
import { IHttpResponse, IRequestPagination } from "libs/common";
import { successResponse } from "../../utils/ro-builder.utils";
import {
    PictureCannotDeleteError,
    PictureCannotModifyError,
    PictureCannotSaveError,
    PictureNotFoundError
} from "libs/response-error";
import {
    IPictureDeleteResponse,
    IPictureDetailResponse,
    IPictureEditResponse, IPictureListResponse,
    IPictureSaveResponse
} from "libs/response/picture";
import { IPictureFindManyOptions } from "./picture.interface";

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
            throw new PictureCannotSaveError(e);
        }
    }

    @ApiOperation({ summary: '修改图片信息' })
    @Put('detail/:id')
    async editPicture(@Body() editPictureDto: EditPictureDto, @UserId() userId: number, @Param() pictureIdDto: PictureIdDto): Promise<IHttpResponse<IPictureEditResponse>> {
        await this.pictureService.hasPictureOrFail(pictureIdDto.id);
        try {
            return successResponse(await this.pictureService.edit(editPictureDto, pictureIdDto.id, userId), '修改图片信息成功');
        } catch (e) {
            throw new PictureCannotModifyError(e);
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
            throw new PictureCannotDeleteError(e);
        }
    }

    @ApiOperation({ summary: '获取图片详情' })
    @Get('detail/:id')
    async adminPictureDetail(@Param() pictureIdDto: PictureIdDto): Promise<IHttpResponse<IPictureDetailResponse>> {
        try {
            return successResponse(await this.pictureService.findOne(pictureIdDto.id));
        } catch (e) {
            throw new PictureNotFoundError(e);
        }
    }

    @ApiOperation({ summary: '图片列表' })
    @Get('list')
    async adminPictureList(@Query() pictureListDto: PictureListDto): Promise<IHttpResponse<IPictureListResponse>> {
        try {
            const options: IPictureFindManyOptions = {
                where: {
                    type: pictureListDto.type || undefined,
                    priority: pictureListDto.priority || undefined
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
            throw new PictureNotFoundError(e)
        }
    }
}
