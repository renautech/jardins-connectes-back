-- Revert jardins-connectes:functions/newUser from pg

BEGIN;

DROP FUNCTION newUser(json);

COMMIT;
