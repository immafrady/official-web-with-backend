import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from "../../shared/base.entity";
import { IUserEntity } from 'libs/entity/user';
import { Article } from "../article/article.entity";
import * as md5 from 'md5';
import { Picture } from "../picture/picture.entity";

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
        () => Article,
        article => article.user
    )
    articles: Article[];

    @OneToMany(
        () => Picture,
        picture => picture.user
    )
    pictures: Picture[];

    @BeforeInsert()
    hashPassword(): void {
        this.password = md5(this.password);
    }
}
