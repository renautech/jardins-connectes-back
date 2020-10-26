-- Revert jardins-connectes:functions/newVariety from pg

BEGIN;

DROP FUNCTION newVariety(json);

COMMIT;
