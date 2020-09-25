create table `big_data` (
      `id` int auto_increment primary key,
      `createDate`  datetime(6)     default CURRENT_TIMESTAMP(6)    not null ,
      `updateDate`  datetime(6)     default CURRENT_TIMESTAMP(6)    not null ,
      `key`         varchar(100)  not null unique,
      `value`       mediumtext      null
);

insert into `big_data` (`key`)
values
       ('ENTERPRISE_COUNT'),
       ('NATIONWIDE_SERVICE_TOTAL_NUMBER'),
       ('NATIONWIDE_SERVICE_TOTAL_COUNT'),
       ('MONTHLY_SERVICE_COUNT'),
       ('REALTIME_PAY_DETAIL'),
       ('NATIONWIDE_CLIENT_DISTRIBUTION'),
       ('FREELANCER_AREAL_DISTRIBUTION'),
       ('XIN_TOWN_NATION_DISTRIBUTION'),
       ('FREELANCER_INDUSTRY_DISTRIBUTION'),
       ('FREELANCER_INCOME_DISTRIBUTION');

