-- Revert jardins-connectes:functions/inserts/newUserWithoutRole from pg

BEGIN;

DROP FUNCTION
    newUserWithoutRole(json);

COMMIT;
