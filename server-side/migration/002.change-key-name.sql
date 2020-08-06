-- 修改user表键名
alter table official_web.user drop key IDX_78a916df40e02a9deb1c4b75ed;
alter table official_web.user add constraint IDX_username unique (username);

-- 修改article表键名
alter table official_web.article drop foreign key FK_636f17dadfea1ffb4a412296a28;
alter table official_web.article add constraint FK_article_to_user_id foreign key (userId) references official_web.user (id);
