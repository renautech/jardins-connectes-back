-- Revert jardins-connectes:findOperationByUserByFamily from pg

BEGIN;

DROP FUNCTION operationByUserByFamily(int, int);

COMMIT;
