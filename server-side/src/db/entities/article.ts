import { BaseEntity } from "./base";
import { Column, Entity, ManyToOne } from "typeorm";
import { ArticlePriority, ArticleStatus, ArticleType } from '../../../../libs/enums/article';
import { IArticleEntity } from "../../../../libs/entity/article";
import { User } from "./user";

@Entity()
export class Article extends BaseEntity implements IArticleEntity{
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
        enum: ArticleStatus,
        default: ArticleStatus.Offline
    })
    status: ArticleStatus;

    @Column({
        type: "enum",
        enum: ArticlePriority,
        default: ArticlePriority.Normal
    })
    priority: ArticlePriority;

    @Column({
        type: "enum",
        enum: ArticleType,
        default: ArticleType.New
    })
    type: ArticleType;

    /**
     * @description 作者
     */
    @ManyToOne(
        type => User,
        user => user.articles
    )
    user: User;

}
