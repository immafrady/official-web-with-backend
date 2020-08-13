
# 职位栏目
CREATE TABLE `job_department` (
    `id`                int                 NOT NULL            AUTO_INCREMENT,
    `createDate`        datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `updateDate`        datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `label`             varchar(191)        NOT NULL            UNIQUE ,
    `sort`              int                 NOT NULL            DEFAULT '0',
    PRIMARY KEY (`id`),
    CONSTRAINT IDX_job_department_unique_label UNIQUE (label)
);


# 职位详情
CREATE TABLE `job_detail` (
    `id`              int                           NOT NULL            AUTO_INCREMENT,
    `createDate`      datetime(6)                   NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `updateDate`      datetime(6)                   NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `content`         text                          NOT NULL,
    `department_id`    int                           NULL,
    `eager`           tinyint(1)                    NOT NULL            DEFAULT '0',
    `hot`             tinyint(1)                    NOT NULL            DEFAULT '0',
    `location`        varchar(191)                  NOT NULL,
    `modifyDate`      datetime(6)                   NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `title`           varchar(191)                  NOT NULL,
    `status`          enum('OFFLINE', 'ONLINE')     NOT NULL            DEFAULT 'OFFLINE',
    PRIMARY KEY (`id`),
    CONSTRAINT FK_job_department_id FOREIGN KEY (department_id) REFERENCES `job_department`(id)
);
