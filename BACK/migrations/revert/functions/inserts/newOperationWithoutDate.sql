-- Revert jardins-connectes:functions/newOperationWithoutDate from pg

BEGIN;

DROP FUNCTION newOperationWithoutDate(json);

COMMIT;
