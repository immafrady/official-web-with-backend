/**
 * 图片类型
 */
export enum PictureType {
    Environment = 'ENVIRONMENT',
    Friend = 'FRIEND',
    Honor = 'HONOR',
    Patent = 'PATENT'
}
export const PictureTypeLabel = {
    [PictureType.Environment]: '工作环境',
    [PictureType.Friend]: '小伙伴生活',
    [PictureType.Honor]: '企业荣誉',
    [PictureType.Patent]: '高薪技术及软著成果'
}

/**
 * 图片重要级别
 */
export enum PicturePriority {
    Normal = '0',
    Important = '1'
}
export const PicturePriorityLabel = {
    [PicturePriority.Normal]: '仅内页展示',
    [PicturePriority.Important]: '一级页面及内页展示'
}
