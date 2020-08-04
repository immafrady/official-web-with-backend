import { isValidPagination } from './validator.util';

type Pagination = number | string
interface IPagination {
    skip?: number,
    take?: number
}

/**
 * 构造分页
 * @param size 分页大小
 * @param page 第几页
 */
export function handlePagination(size: Pagination, page: Pagination): IPagination {
    if (isValidPagination(page, size)) {
        size = +size
        page = +page
        return {
            skip: size * (page - 1),
            take: size
        }
    } else {
        return {}
    }
}
