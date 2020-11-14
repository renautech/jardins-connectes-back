-- Revert jardins-connectes:family_id from pg

BEGIN;

ALTER TABLE family 
DROP COLUMN family_id;

COMMIT;
