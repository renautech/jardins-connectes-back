-- Revert jardins-connectes:functions/filters/findActiveBoardByUser from pg

BEGIN;

DROP FUNCTION findActiveBoardByUser(int);

COMMIT;
