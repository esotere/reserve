DROP DATABASE IF EXISTS Participant;

CREATE DATABASE Participant;
USE Participant;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (20),
    name VARCHAR (100) NOT NULL,
    address VARCHAR (120) NOT NULL,
    phoneNumber INT (15) NOT NULL,
    email VARCHAR (320),
    number_of_shares_purchased INT (15) NOT NULL,
    bank_name VARCHAR (50) NOT NULL,
    bank_account_number INT (25) NOT NULL,
    bvn INT (25) NOT NULL,
    name_of_next_of_kin VARCHAR (100) NOT NULL,
    relationship VARCHAR (30) NOT NULL,
    address_of_nok VARCHAR (120) NOT NULL,
    phoneNumber_of_nok INT (15) NOT NULL,
    email_of_nok VARCHAR (320),
    creation_date DATETIME NOT NULL,
    PRIMARY KEY (id)

);

