-- Revert jardins-connectes:functions/newOperationType from pg

BEGIN;

DROP FUNCTION newOperationType(json);

COMMIT;
