create table `picture`
(
    `id`          int         auto_increment      primary key ,
    `createDate`  datetime(6)                     default CURRENT_TIMESTAMP(6)        not null ,
    `updateDate`  datetime(6)                     default CURRENT_TIMESTAMP(6)        not null ,
    `modifyDate`  datetime(6)                     default CURRENT_TIMESTAMP(6)        not null ,
    `url`         text                                                                not null ,
    `comment`     text                                                                not null ,
    `title`       text                                                                not null ,
    `priority`    enum('0', '1')                  default '0'                         not null ,
    `type`        enum('ENVIRONMENT', 'FRIEND')   default 'FRIEND'                    not null ,
    `userId`      int                                                                 null ,
    constraint  FK_picture_to_user_id  foreign key (userId)    references official_web.user (id)
);
