
# 年份栏目
CREATE TABLE `incident_year`(
    `id`                int                  NOT NULL           AUTO_INCREMENT,
    `createDate`        datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `updateDate`        datetime(6)         NOT NULL            DEFAULT CURRENT_TIMESTAMP(6),
    `year`              varchar(191)        NOT NULL            UNIQUE,
    `label`             varchar(191)        NOT NULL            UNIQUE,
    `sort`              int                 NOT NULL            DEFAULT '0',
    PRIMARY KEY (`id`)
);

# 事件详情
create table incident_detail
(
    id                 int auto_increment       primary key,
    createDate         datetime(6)              not null  default CURRENT_TIMESTAMP(6),
    updateDate         datetime(6)              not null default CURRENT_TIMESTAMP(6),
    title              varchar(191)             not null,
    detail             text                     not null,
    sort               int                      not null DEFAULT '0',
    year_id            int                      null,
    constraint FK_incident_year_id
    foreign key (year_id) references incident_year (id)
);
