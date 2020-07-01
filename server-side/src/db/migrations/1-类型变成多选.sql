# up
ALTER TABLE article MODIFY type TEXT NOT NULL;
ALTER TABLE article MODIFY priority varchar(50);
UPDATE article SET priority = '0' WHERE priority = 'NORMAL';
UPDATE article SET priority = '1' WHERE priority = 'IMPORTANT';
UPDATE article SET priority = '2' WHERE priority = 'VERY_IMPORTANT';
ALTER TABLE article MODIFY priority ENUM('0', '1', '2') DEFAULT '0' NOT NULL;


# down
ALTER TABLE article MODIFY type ENUM('HOT_ARTICLE', 'NEW_ARTICLE', 'OLD_ARTICLE', 'HONOR_ARTICLE') DEFAULT 'NEW_ARTICLE' NOT NULL;
ALTER TABLE article MODIFY priority ENUM('NORMAL', 'IMPORTANT', 'VERY_IMPORTANT') DEFAULT 'NORMAL' NOT NULL;

# set default type
UPDATE article SET type = 'NEW_ARTICLE';
