CREATE DATABASE perntodo;


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(255)
);