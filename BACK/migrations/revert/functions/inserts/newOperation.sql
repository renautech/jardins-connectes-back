-- Revert jardins-connectes:functions/newOperation from pg

BEGIN;

DROP FUNCTION newOperation(json);

COMMIT;
