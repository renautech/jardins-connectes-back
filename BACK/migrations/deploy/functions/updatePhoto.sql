-- Deploy jardins-connectes:functions/updtePhoto to pg

BEGIN;

CREATE FUNCTION
    updatePhoto(jphoto json)
    RETURNS "photo" AS $$
UPDATE "photo" SET
    "url" = jphoto->> 'url',
    "date" = (jphoto->> 'date')::timestamptz,
    "board_id" = (jphoto->> 'board_id')::int  
WHERE id = (jphoto->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;