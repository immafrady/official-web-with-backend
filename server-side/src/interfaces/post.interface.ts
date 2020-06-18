import {
    IPostCreateOptions,
    IPostDeleteOptions, IPostDetailOptions,
    IPostListOptions,
    IPostModifyOptions
} from "../../../libs/request/post";
import {
    IPostCreateResponse,
    IPostDeleteResponse, IPostDetailResponse,
    IPostListResponse,
    IPostModifyResponse
} from "../../../libs/response/post";

export interface IPostService {
    create(options: IPostCreateOptions): Promise<IPostCreateResponse>;
    delete(options: IPostDeleteOptions): Promise<IPostDeleteResponse>;
    modify(options: IPostModifyOptions): Promise<IPostModifyResponse>;
    findMany(options: IPostListOptions): Promise<IPostListResponse>;
    findOne(options: IPostDetailOptions): Promise<IPostDetailResponse>;
}
