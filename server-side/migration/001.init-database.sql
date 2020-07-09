-- auto-generated definition
create table article
(
    id         int auto_increment primary key,
    createDate datetime(6)                default CURRENT_TIMESTAMP(6) not null,
    updateDate datetime(6)                default CURRENT_TIMESTAMP(6) not null,
    title      varchar(191)                                            not null,
    content    longtext                                                not null,
    thumbnail  varchar(191)                                            not null,
    modifyDate datetime(6)                default CURRENT_TIMESTAMP(6) not null,
    status     enum ('OFFLINE', 'ONLINE') default 'OFFLINE'            not null,
    priority   enum ('0', '1', '2')       default '0'                  not null,
    type       text                                                    not null,
    userId     int                                                     null,
    constraint FK_636f17dadfea1ffb4a412296a28
        foreign key (userId) references user (id)
);

-- auto-generated definition
create table user
(
    id         int auto_increment primary key,
    createDate datetime(6) default CURRENT_TIMESTAMP(6) not null,
    updateDate datetime(6) default CURRENT_TIMESTAMP(6) not null,
    username   varchar(191)                             not null,
    nickname   varchar(191)                             not null,
    password   varchar(191)                             not null,
    constraint IDX_78a916df40e02a9deb1c4b75ed
        unique (username)
);

