import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
