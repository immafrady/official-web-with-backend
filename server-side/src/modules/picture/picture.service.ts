import { Inject, Injectable } from "@nestjs/common";
import { Token_PictureRepository } from "../../constants";
import { Repository } from "typeorm";
import { Picture } from "./picture.entity";
import { SavePictureDto } from "./dto";
import { User } from "../user/user.entity";

@Injectable()
export class PictureService {
    constructor(@Inject(Token_PictureRepository) private pictureRepository: Repository<Picture>) {}

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
}
