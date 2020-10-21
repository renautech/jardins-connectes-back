-- Revert jardins-connectes:functions/newPhotoWithoutDate from pg

BEGIN;

DROP FUNCTION newPhotoWithoutDate(json);

COMMIT;
