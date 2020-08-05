import { BaseEntity } from "../../shared/base.entity";
import { IPictureEntity } from "libs/entity/picture";
import { PicturePriority, PictureType } from "libs/enums/picture";
import { Column, Entity, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Picture extends BaseEntity implements IPictureEntity {
    /**
     * @description 图片地址
     */
    @Column({
        type: "tinytext"
    })
    url: string;

    /**
     * @description 图片描述
     */
    @Column({
        type: "text"
    })
    comment: string;

    /**
     * @description 图片标题
     */
    @Column({
        type: "text"
    })
    title: string;

    /**
     * @description 自定义时间
     */
    @Column({
        type: "datetime",
        default: () => "CURRENT_TIMESTAMP(6)",
        precision: 6
    })
    modifyDate: Date;

    /**
     * @description 图片优先级
     */
    @Column({
        type: "enum",
        enum: PicturePriority,
        default: PicturePriority.NORMAL
    })
    priority: PicturePriority;

    /**
     * @description 图片类型
     */
    @Column({
        type: "enum",
        enum: PictureType,
        default: PictureType.FRIEND
    })
    type: PictureType;

    @ManyToOne(
        () => User,
        user => user.pictures
    )
    user: User;
}
