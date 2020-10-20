-- Deploy jardins-connectes:functions/updateBoard to pg

BEGIN;

CREATE FUNCTION
    updateBoard(jboard json)
    RETURNS "board" AS $$
UPDATE "board" SET
    "name" = jboard->> 'name',
    "active" = (jboard->> 'active')::boolean,
    "variety_id" = (jboard->> 'variety_id')::int,
    "user_id" = (jboard->> 'user_id')::int
WHERE "id" = (jboard->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
