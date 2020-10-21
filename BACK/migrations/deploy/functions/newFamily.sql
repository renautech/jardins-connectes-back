-- Deploy jardins-connectes:functions/newFamily to pg

BEGIN;

CREATE FUNCTION
    newFamily(jfamily json)
    RETURNS "family" AS $$
INSERT INTO family (
    "name",
    picture,
    "description"
) VALUES(
    jfamily->> 'name',
    jfamily->> 'picture',
    jfamily->> 'description'
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
