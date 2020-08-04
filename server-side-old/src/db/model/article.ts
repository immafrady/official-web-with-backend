// import { EntityRepository, Repository } from "typeorm";
// import { Article } from "../entities/article";
// import { FindConditions } from 'typeorm/find-options/FindConditions';
// import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
// import { handlePagination } from '../../utils/handle-pagination.utils';
// // import { IArticleEntity } from 'libs/entity/article';
//
// type Where = FindConditions<Article>[] | FindConditions<Article> | ObjectLiteral | string
//
// @EntityRepository(Article)
// export class ArticleRepository extends Repository<Article> {
//     getListAndCount(size: string | number, page: string | number, where?: Where) {
//         return this.findAndCount({
//             where,
//             ...handlePagination(size, page)
//         })
//     }
//
//     getRelated(where) {
//
//     }
// }
