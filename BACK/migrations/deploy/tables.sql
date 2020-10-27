-- Deploy jardins-connectes:tables to pg

BEGIN;

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name text,
    last_name text,
    street_name text,
    street_number int,
    town text,
    postcode text,
    department text NOT NULL,
    country text,
    email text NOT NULL UNIQUE,
    "password" text NOT NULL,
    nickname text NOT NULL UNIQUE,
    profile_picture text,
    "role" text DEFAULT 'jardinier'
);

CREATE TABLE family (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    picture text NOT NULL,
    "description" text
);

CREATE TABLE  variety(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    picture text,
    "description" text,
    family_id int NOT NULL REFERENCES family(id) ON DELETE CASCADE
);

CREATE TABLE board (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    active boolean NOT NULL,
    variety_id int NOT NULL REFERENCES variety(id) ON DELETE CASCADE,
    "user_id" int NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
);

CREATE TABLE photo (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "url" text NOT NULL,
    "date" timestamptz DEFAULT NOW(),
    board_id int NOT NULL REFERENCES board(id) ON DELETE CASCADE
);

CREATE TABLE operation_type (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "description" text
);

CREATE TABLE operation (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "date" timestamptz DEFAULT NOW(),
    quantity float,
    product_name text,
    maker text,
    comment text,
    operation_type_id int NOT NULL REFERENCES operation_type(id) ON DELETE CASCADE,
    board_id int NOT NULL REFERENCES board(id) ON DELETE CASCADE
);

COMMIT;
