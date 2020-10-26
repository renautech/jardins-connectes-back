-- Revert jardins-connectes:functions/newPhoto from pg

BEGIN;

DROP FUNCTION newPhoto(json);

COMMIT;
