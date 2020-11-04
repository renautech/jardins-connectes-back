-- Revert jardins-connectes:fix/varietyNotUnique from pg

BEGIN;

ALTER TABLE variety
ADD CONSTRAINT variety_name_key UNIQUE(name);

COMMIT;
