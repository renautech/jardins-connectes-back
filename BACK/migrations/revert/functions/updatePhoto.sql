-- Revert jardins-connectes:functions/updtePhoto from pg

BEGIN;

DROP FUNCTION updatePhoto(json);

COMMIT;
