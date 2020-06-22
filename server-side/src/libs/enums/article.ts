/**
 * @description 文章状态
 */
export enum ArticleStatus {
    Offline = 'OFFLINE',
    Online = 'ONLINE'
}

/**
 * @description 文章优先级
 */
export enum ArticlePriority {
    Normal= 'NORMAL',
    Important = 'IMPORTANT',
    VeryImportant = 'VERY_IMPORTANT'
}

/**
 * @description 文章类型
 */
export enum ArticleType {
    Hot = 'HOT_ARTICLE', // 热门报道
    New = 'NEW_ARTICLE', // 最新动态
    OLD = 'OLD_ARTICLE' // 往期动态
}
