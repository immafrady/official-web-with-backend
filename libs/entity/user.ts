/**
 * @description 用户实体接口
 */
import { IPostEntity } from "./post";

export interface IUserEntity {
    username: string;
    nickname: string;
    password: string;
}
