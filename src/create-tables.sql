drop table if exists tv_quotes;

CREATE TABLE tv_quotes (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  show_name VARCHAR(255) NOT NULL,
  creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Luke, I am your father.', 'Darth Vader', 'Star Wars (original trilogy)');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Elementary, my dear Watson.', 'Sherlock Holmes', 'Sherlock');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Yippee-ki-yay, motherfucker!', 'John McClane', 'Die Hard');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('There is no spoon.', 'Morpheus', 'The Matrix');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Winter is coming.', 'Ned Stark', 'Game of Thrones');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('How you doin?', 'Joey Tribbiani', 'Friends');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Not gonna lie...',  'Michael Scott', 'The Office (US)');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Carpe diem!', 'John Keating', 'Dead Poets Society');

INSERT INTO TV_QUOTES (text, author, show_name)
VALUES ('These are not the droids you are looking for.', 'Obi-Wan Kenobi', 'Star Wars (original trilogy)');

INSERT INTO tv_quotes (text, author, show_name)
VALUES ('Is this your card?', 'Betty White', 'Saturday Night Live');


select * from tv_quotes;