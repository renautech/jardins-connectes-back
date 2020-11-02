-- Deploy jardins-connectes:functions/newPhotoWithoutDate to pg

BEGIN;

CREATE FUNCTION
    newPhotoWithoutDate(jphoto json)
    RETURNS "photo" AS $$
INSERT INTO "photo" (
    "url",
    "board_id"
) VALUES(
    jphoto->> 'url',
    (jphoto->> 'board_id')::int
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
