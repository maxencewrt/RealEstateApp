"psql -U makswrt -d realestatedb"
CREATE DATABASE realestatedb;

CREATE TABLE properties (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(50),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    user_role VARCHAR(255) CHECK (user_role IN ('default', 'pro', 'business'))
);

CREATE TABLE properties2 (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(50),
    tag VARCHAR(50),
    address VARCHAR(255),
    description VARCHAR(255),
    purchase_date VARCHAR(300),
    price VARCHAR(50),
    surface VARCHAR(50),
    price_m2 VARCHAR(50),
    cashflow VARCHAR(50),
    link_rental VARCHAR(50),
    link_bank VARCHAR(50),
    link_travaux VARCHAR(50)
);