/**
 * @description 校验是否为合法的分页
 * @param page 第几页
 * @param size 分页大小
 */
const isValidPagination = (page: number|string, size: number|string) => {
    page = +page;
    size = +size;
    return typeof +size === "number" &&
        typeof +page === "number" &&
        !Number.isNaN(size * (page - 1)) &&
        page > 0 &&
        size > 0 &&
        Math.floor(page) === page &&
        Math.floor(size) === size
}

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
