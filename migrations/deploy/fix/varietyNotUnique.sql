-- Deploy jardins-connectes:fix/varietyNotUnique to pg

BEGIN;

ALTER TABLE variety
DROP CONSTRAINT variety_name_key;

COMMIT;
