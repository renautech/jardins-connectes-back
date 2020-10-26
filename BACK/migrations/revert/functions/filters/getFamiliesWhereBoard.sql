-- Revert jardins-connectes:views/familyWhereBoard from pg

BEGIN;

DROP FUNCTION findActiveBoardsByUser(int);

COMMIT;
