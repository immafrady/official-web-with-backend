# 职位详情
CREATE TABLE `job_detail` (
    `id`              int                 NOT NULL            AUTO_INCREMENT,
    `createDate`      datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `updateDate`      datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `content`         text                NOT NULL,
    `department`      varchar(191)        NOT NULL,
    `location`        varchar(191)        NOT NULL,
    `modifyDate`      datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `title`           varchar(191)        NOT NULL,
    PRIMARY KEY (`id`)
);

# 职位栏目
CREATE TABLE `job_type` (
    `id`                int                 NOT NULL            AUTO_INCREMENT,
    `createDate`        datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `updateDate`        datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `label`             varchar(191)        NOT NULL            UNIQUE ,
    PRIMARY KEY (`id`)
);

# 职位中间表
CREATE TABLE `job_type_to_detail` (
    `detail_id`         int             NOT NULL,
    `type_id`           int             NOT NULL,
    PRIMARY KEY (detail_id, type_id),
    INDEX IDX_job_detail_id (`detail_id`),
    INDEX IDX_job_type_id (`type_id`)
)
