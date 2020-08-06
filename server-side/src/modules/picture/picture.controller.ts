import { Controller, Post, Body } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { PictureService } from "./picture.service";
import { SavePictureDto } from "./dto";
import { UserId } from "../../shared/decorators/user-id.decorator";
import { IHttpResponse } from "libs/common";
import { successResponse } from "../../utils/ro-builder.utils";
import { PictureCannotSaveError } from "libs/response-error";

@ApiTags('图片(picture)')
@ApiBearerAuth()
@Controller('picture')
export class PictureController {
    constructor(private pictureService: PictureService) {}

    @ApiOperation({ summary: '保存图片们' })
    @Post('save')
    async createPictures(@Body() savePictureDto: SavePictureDto, @UserId() userId: number): Promise<IHttpResponse<any>> {
        try {
            await this.pictureService.create(savePictureDto, userId)
            return successResponse()
        } catch (e) {
            throw new PictureCannotSaveError(e)
        }
    }
}
