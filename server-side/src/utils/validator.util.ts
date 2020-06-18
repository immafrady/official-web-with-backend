/**
 * @description 校验是否为合法的分页
 * @param page 第几页
 * @param size 分页大小
 */
export const isValidPagination = (page: number, size: number) => {
    return typeof size === "number" &&
        typeof page === "number" &&
        !Number.isNaN(size * (page - 1)) &&
        page > 0 &&
        size > 0 &&
        Math.floor(page) === page &&
        Math.floor(size) === size
}
