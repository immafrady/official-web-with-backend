import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base";

@Entity()
export class User extends BaseEntity {
    @Column({
        unique: true
    })
    username: string;

    @Column()
    nickname: string;

    @Column()
    password: string;
}
