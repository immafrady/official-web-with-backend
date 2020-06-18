import { provide, inject } from 'midway';
import { IPostService } from "../interfaces/post.interface";
import { SERVICE_DB, SERVICE_POST } from "../inject-token";
import {
    IPostCreateOptions,
    IPostDeleteOptions,
    IPostDetailOptions,
    IPostListOptions, IPostModifyOptions
} from "../../../libs/request/post";
import {
    IPostCreateResponse,
    IPostDeleteResponse,
    IPostDetailResponse,
    IPostListResponse, IPostModifyResponse
} from "../../../libs/response/post";

@provide(SERVICE_POST)
export class PostService implements IPostService {
    @inject(SERVICE_DB)
    db;

    create(options: IPostCreateOptions): Promise<IPostCreateResponse> {

        return Promise.resolve(undefined);
    }

    delete(options: IPostDeleteOptions): Promise<IPostDeleteResponse> {
        return Promise.resolve(undefined);
    }

    findMany(options: IPostListOptions): Promise<IPostListResponse> {
        return Promise.resolve(undefined);
    }

    findOne(options: IPostDetailOptions): Promise<IPostDetailResponse> {
        return Promise.resolve(undefined);
    }

    modify(options: IPostModifyOptions): Promise<IPostModifyResponse> {
        const id = options.id
        if (id) {

        }
        return Promise.resolve(undefined);
    }


}
