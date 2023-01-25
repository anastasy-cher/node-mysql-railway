drop database if exists userdb;
create database userdb;
USE userdb;

CREATE TABLE news(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)