CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
id INTEGER NOT NULL auto_increment,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN default false,
    primary key(id)
);
