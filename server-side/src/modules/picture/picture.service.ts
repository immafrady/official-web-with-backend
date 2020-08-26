import { Inject, Injectable } from "@nestjs/common";
import { Token_PictureRepository } from "../../constants";
import { DeleteResult, Repository } from "typeorm";
import { Picture } from "./picture.entity";
import { EditPictureDto, SavePictureDto } from "./dto";
import { User } from "../user/user.entity";
import { IPictureDetailResponse, IPictureListResponse } from "libs/response/picture";
import { IPictureFindManyOptions } from "./picture.interface";
import { IRequestPagination } from "libs/common";
import { cleanNoneValue } from "../../utils/clean-none-value.util";
import { handlePagination } from "../../utils/handle-pagination.util";
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";
import { ResponseCode } from "libs/response-code";
import { ResponseError } from "../../shared/response-error";

@Injectable()
export class PictureService {
    constructor(@Inject(Token_PictureRepository) private pictureRepository: Repository<Picture>) {}

    /**
     * @description 新增图片们
     * @param savePictureDto
     * @param userId
     */
    async create(savePictureDto: SavePictureDto, userId: number): Promise<any> {
        const qb = await this.pictureRepository.createQueryBuilder();
        const user = new User();
        user.id = userId;

        const values = savePictureDto.urls.map(url => {
            return <Picture>{
                url,
                modifyDate: savePictureDto.modifyDate,
                type: savePictureDto.type,
                priority: savePictureDto.priority,
                title: savePictureDto.title,
                comment: savePictureDto.comment,
                user
            }
        });
        await qb.insert().into(Picture).values(values).execute();
        return {};
    }


    /**
     * @description 编辑图片
     * @param editPictureDto
     * @param pictureId
     * @param userId
     */
    async edit(editPictureDto: Partial<EditPictureDto>, pictureId: number, userId: number): Promise<any> {
        const picture = this.pictureRepository.create(editPictureDto);
        const user = new User();
        user.id = userId;
        picture.user = user;
        await this.pictureRepository.update(pictureId, picture);
        return {};
    }

    /**
     * @description 删除图片
     * @param pictureId
     */
    async delete(pictureId: number): Promise<DeleteResult> {
        return await this.pictureRepository.delete(pictureId);
    }

    /**
     * @description 图片单张详情(或报错)
     * @param pictureId
     */
    async findOneOrFail(pictureId: number): Promise<IPictureDetailResponse> {
        const picture = await this.pictureRepository.findOne(pictureId);
        if (!picture) {
            throw new ResponseError(ResponseCode.CommonItemNotFound, '找不到图片');
        }
        return picture;
    }

    async findMany(pictureFindManyOptions: IPictureFindManyOptions, pagination?: IRequestPagination): Promise<IPictureListResponse> {
        cleanNoneValue(pictureFindManyOptions.where);
        let options: FindManyOptions<Picture> = {
            select: pictureFindManyOptions.select,
            where: pictureFindManyOptions.where,
            order: {
                sort: "ASC",
                modifyDate: "DESC"
            }
        }
        if (pagination) {
            options = { ...options, ...handlePagination(pagination.size, pagination.page)}
        }
        const [list, total] = await this.pictureRepository.findAndCount(options)
        return {
            list,
            total
        }
    }
}
