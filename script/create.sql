
CREATE TABLE Icon
(
    id    INTEGER not null,
    uri   TEXT,
    icon  BLOB,
    
    PRIMARY KEY (id)
);
INSERT INTO Icon VALUES (0, null, null);
--------------------------------------------------------------------------------

CREATE TABLE Page
(
	id   INTEGER not null,
    app  TEXT    not null,
    url  TEXT    not null,
    tag  TEXT    not null,
    info TEXT    not null,
    icon INTEGER not null DEFAULT 0,
    
    PRIMARY KEY (id),  UNIQUE (app),
    FOREIGN KEY (icon) REFERENCES Icon(id) ON DELETE set default
);

INSERT INTO Page VALUES
	(1, 'com.web3p.home', 'https://erunapp.github.io/', 'menu;home', '앱 실행 및 관리', 0),
	(2, 'com.web3p.edit', 'https://erunapp.github.io/', '소스;파일', '소스 보기 및 관리', 0),
	(3, 'com.web3p.memo', 'https://erunapp.github.io/', 'form;note', '텍스트편집', 0),
	(4, 'com.web3p.clock', 'https://erunapp.github.io/', 'form;alarm;일정;camera', 'Android기능 사용', 0);
--------------------------------------------------------------------------------

CREATE TABLE Tree
(
    seq  INTEGER not null,
    lvl  INTEGER not null,
    node INTEGER not null,
    id   TEXT    not null,
    page INTEGER,

    PRIMARY KEY (seq),
    FOREIGN KEY (page) REFERENCES Page(id) ON DELETE cascade
);
CREATE INDEX IFK_Tree ON Tree(page);

INSERT INTO Tree VALUES
	(1, 1, 0, '기본 제공앱', null),
	(2, 2, 1, '홈 관리',    null),
	(3, 3, 2, '기본 메뉴',  1),
	(4, 3, 2, '소스 관리',  2),
	(5, 2, 1, '기본 앱',    null),
	(6, 3, 5, '더미 기능',  3),
	(7, 1, 0, '시스템 관련', null),
	(8, 2, 7, '기기 서비스', null),
	(9, 3, 8, '시스템 기능', 4);
--------------------------------------------------------------------------------

CREATE TABLE Tag
(
    tag  TEXT    not null,
    seq  INTEGER not null,
    page INTEGER not null,
    
    PRIMARY KEY (tag, seq),
    FOREIGN KEY (page) REFERENCES Page(id) ON DELETE cascade
);

INSERT INTO Tag VALUES
	('menu', 1, 1),
	('home', 1, 1),
	('소스', 1, 2),
	('파일', 1, 2),
	('form', 1, 3),
	('note', 1, 3),
	('form', 2, 4),
	('alarm', 1, 4),
	('일정', 1, 4),
	('camera', 1, 4);
--------------------------------------------------------------------------------

CREATE VIEW TagList (tag, cnt) AS
	SELECT tag, count(*) as cnt FROM Tag GROUP BY tag ORDER BY cnt DESC;

CREATE VIEW PageList (seq, lvl, id, app, url, tag, info, uri, icon) AS
	SELECT t.seq, t.lvl, t.id, p.app, p.url, p.tag, p.info, i.uri, i.icon
	FROM Tree t LEFT JOIN (Page p JOIN Icon i ON p.icon = i.id) ON t.page = p.id
	ORDER BY t.seq;
--------------------------------------------------------------------------------

