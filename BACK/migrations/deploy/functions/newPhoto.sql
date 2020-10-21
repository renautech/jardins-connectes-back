-- Deploy jardins-connectes:functions/newPhoto to pg

BEGIN;

CREATE FUNCTION
    newPhoto(jphoto json)
    RETURNS "photo" AS $$
INSERT INTO "photo" (
    "url",
    "date",
    "board_id"
) VALUES(
    jphoto->> 'url',
    (jphoto->> 'date')::timestamptz,
    (jphoto->> 'board_id')::int
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
