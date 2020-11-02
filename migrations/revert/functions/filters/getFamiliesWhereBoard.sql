-- Revert jardins-connectes:views/familyWhereBoard from pg

BEGIN;

DROP FUNCTION findWhereActiveBoardsByUser(int);

COMMIT;
