/**
 * @description 文章状态
 */
export enum ArticleStatus {
    Offline = 'OFFLINE',
    Online = 'ONLINE'
}
export const ArticleStatusLabel = {
    [ArticleStatus.Offline]: '已下线',
    [ArticleStatus.Online]: '已上线'
}

/**
 * @description 文章优先级
 */
export enum ArticlePriority {
    Normal= 'NORMAL',
    Important = 'IMPORTANT',
    VeryImportant = 'VERY_IMPORTANT'
}
export const ArticlePriorityLabel = {
    [ArticlePriority.Normal]: '普通',
    [ArticlePriority.Important]: '重要',
    [ArticlePriority.VeryImportant]: '非常重要'
}

/**
 * @description 文章类型
 */
export enum ArticleType {
    Hot = 'HOT_ARTICLE', // 热门报道
    New = 'NEW_ARTICLE', // 最新动态
    Old = 'OLD_ARTICLE', // 往期动态
    Honor = 'HONOR_ARTICLE', // 荣誉奖项
}
export const ArticleTypeLabel = {
    [ArticleType.Hot]: '热门报道',
    [ArticleType.New]: '最新动态',
    [ArticleType.Old]: '往期动态',
    [ArticleType.Honor]: '荣誉奖项'
}
