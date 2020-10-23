-- Revert jardins-connectes:functions/updateFamily from pg

BEGIN;

DROP FUNCTION updateFamily(json);

COMMIT;
