CREATE DATABASE pernforms;

CREATE TABLE forms(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(100),
    dept VARCHAR(100),
    age INT,
    dob DATE

);
