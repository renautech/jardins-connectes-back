-- Revert jardins-connectes:functions/updateOperation from pg

BEGIN;

DROP FUNCTION updateOperation(json);

COMMIT;
