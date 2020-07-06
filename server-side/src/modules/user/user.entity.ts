import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from "../../shared/base.entity";
import { IUserEntity } from 'libs/entity/user';
import { Article } from "../article/article.entity";
import * as md5 from 'md5'

@Entity()
export class User extends BaseEntity implements IUserEntity{
    /**
     * @description 用户名
     */
    @Column({
        unique: true,
        select: false,
        length: 191
    })
    username: string;

    @Column({
        length: 191
    })
    nickname: string;

    @Column({
        length: 191
    })
    password: string;

    @OneToMany(
        type => Article,
        article => article.user
    )
    articles: Article[];

    @BeforeInsert()
    hashPassword() {
        this.password = md5(this.password)
    }
}
