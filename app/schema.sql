DROP DATABASE IF EXISTS doneboard_db;
CREATE DATABASE doneboard_db;
USE doneboard_db;

INSERT INTO Users (first_name, last_name, username, password, email, phone_number)
VALUES ("Jordan", "McQuiston", "JordanCley","1234567","jordan@thehnrl.com", "7652528980"),
        ("Brandon", "Thomas", "Brando45","7654321","Brando@thehnrl.com", "7658646654");

INSERT INTO Projects (title)
VALUES ("Project1", "Project2", "Project3", "Project4");

INSERT INTO Tasks ()