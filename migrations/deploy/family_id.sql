-- Deploy jardins-connectes:family_id to pg

BEGIN;

ALTER TABLE family 
ADD COLUMN family_id int NOT NULL UNIQUE;

COMMIT;
