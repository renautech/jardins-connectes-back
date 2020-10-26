-- Revert jardins-connectes:functions/filters/findBoardsByFamilyByUser from pg

BEGIN;

DROP FUNCTION findBoardsByFamilyByUser(int, int)

COMMIT;
