-- Revert jardins-connectes:functions/updateUser from pg

BEGIN;


DROP FUNCTION updateUser(json);

COMMIT;
