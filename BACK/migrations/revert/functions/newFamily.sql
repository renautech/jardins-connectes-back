-- Revert jardins-connectes:functions/newFamily from pg

BEGIN;

DROP FUNCTION newFamily(json);

COMMIT;
