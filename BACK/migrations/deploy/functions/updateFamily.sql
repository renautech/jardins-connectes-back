-- Deploy jardins-connectes:functions/updateFamily to pg

BEGIN;

CREATE FUNCTION
    updateFamily(jfamily json)
    RETURNS "family" AS $$
UPDATE "family" SET
    "name" = jfamily->> 'name',
    picture = jfamily->> 'picture',
    "description" = jfamily->> 'description'
WHERE id = (jfamily->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
