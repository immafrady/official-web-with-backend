/**
 * @description 职位状态
 */
export enum JobStatus {
    Offline = 'OFFLINE',
    Online = 'ONLINE'
}
export const JobStatusLabel = {
    [JobStatus.Offline]: '已下线',
    [JobStatus.Online]: '已上线'
}
