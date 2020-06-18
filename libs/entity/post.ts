import { PostPriority, PostStatus } from "../enums/post";

/**
 * @description 文章实体接口
 */
export interface IPostEntity {
    title: string;
    content: string;
    thumbnail: string;
    modifyDate: Date;
    status: PostStatus;
    priority: PostPriority;
}
