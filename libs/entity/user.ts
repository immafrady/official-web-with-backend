/**
 * @description 用户实体接口
 */
import { IBaseEntity } from "../common";

export interface IUserEntity extends Partial<IBaseEntity>{
    username: string;
    nickname: string;
    password: string;
}
