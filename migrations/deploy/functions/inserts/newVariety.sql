-- Deploy jardins-connectes:functions/newVariety to pg

BEGIN;

CREATE FUNCTION
    newVariety(jvariety json)
    RETURNS "variety" AS $$
INSERT INTO variety (
    "name",
    picture,
    "description",
    family_id
) VALUES(
    jvariety->> 'name',
    jvariety->> 'picture',
    jvariety->> 'description',
    (jvariety->> 'family_id')::int
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;

