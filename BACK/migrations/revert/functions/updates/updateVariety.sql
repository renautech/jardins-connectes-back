-- Revert jardins-connectes:functions/updateVariety from pg

BEGIN;

DROP FUNCTION updateVariety(json);

COMMIT;
