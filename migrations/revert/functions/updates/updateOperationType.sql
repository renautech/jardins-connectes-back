-- Revert jardins-connectes:functions/updateOperationType from pg

BEGIN;

DROP FUNCTION updateOperationType(json);

COMMIT;
