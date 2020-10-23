-- Revert jardins-connectes:views/familyWhereBoard from pg

BEGIN;

DROP FUNCTION findWhereVoidBoardByUser(int);

COMMIT;
