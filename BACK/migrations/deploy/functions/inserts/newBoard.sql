-- Deploy jardins-connectes:functions/newBoard to pg

BEGIN;

CREATE FUNCTION
    newBoard(jboard json)
    RETURNS "board" AS $$
INSERT INTO "board" (
    "name",
    "active",
    "variety_id",
    "user_id"
) VALUES(
    jboard->> 'name',
    (jboard->> 'active')::boolean,
    (jboard->> 'variety_id')::int,
    (jboard->> 'user_id')::int
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
