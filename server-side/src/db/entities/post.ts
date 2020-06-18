import { BaseEntity } from "./base";
import { Column, Entity, ManyToOne } from "typeorm";
import { PostPriority, PostStatus } from "../../../../libs/enums/post";
import { IPostEntity } from "../../../../libs/entity/post";
import { User } from "./user";

@Entity()
export class Post extends BaseEntity implements IPostEntity{
    /**
     * @description 标题
     */
    @Column()
    title: string;

    @Column({
        type: "longtext"
    })
    content: string;

    /**
     * @description 缩略图
     */
    @Column()
    thumbnail: string;

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
     * @description 文章状态
     */
    @Column({
        type: "enum",
        enum: PostStatus,
        default: PostStatus.Offline
    })
    status: PostStatus;

    @Column({
        type: "enum",
        enum: PostPriority,
        default: PostPriority.Normal
    })
    priority: PostPriority;

    /**
     * @description 作者
     */
    @ManyToOne(
        type => User,
        user => user.posts
    )
    user: User;
}
