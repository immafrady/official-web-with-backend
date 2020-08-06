/**
 * 图片类型
 */
export enum PictureType {
    ENVIRONMENT = 'ENVIRONMENT',
    FRIEND = 'FRIEND'
}
export const PictureTypeLabel = {
    [PictureType.ENVIRONMENT]: '工作环境',
    [PictureType.FRIEND]: '小伙伴生活'
}

/**
 * 图片重要级别
 */
export enum PicturePriority {
    NORMAL,
    IMPORTANT
}
export const PicturePriorityLabel = {
    [PicturePriority.NORMAL]: '普通',
    [PicturePriority.IMPORTANT]: '重要'
}
