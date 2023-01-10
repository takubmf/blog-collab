DROP DATABASE IF EXISTS illuna;

CREATE DATABASE illuna;

USE illuna;

CREATE TABLE app_user
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
    email varchar (50) NOT NULL,
    password varchar (50) NOT NULL,
    age INT,
    location varchar (50) NOT NULL,
    avatar varchar (200),
	PRIMARY KEY (id)
);