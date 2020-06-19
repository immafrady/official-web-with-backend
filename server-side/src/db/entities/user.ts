import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base";
import { IUserEntity } from "../../../../libs/entity/user";
import { Article } from "./article";

@Entity()
export class User extends BaseEntity implements IUserEntity{
    /**
     * @description 用户名
     */
    @Column({
        unique: true,
        select: false
    })
    username: string;

    @Column()
    nickname: string;

    @Column({
        select: false
    })
    password: string;

    @OneToMany(
        type => Article,
        article => article.user
    )
    articles: Article[];
}
