-- Revert jardins-connectes:fix/descriptionInUpdateVariety from pg

BEGIN;

DROP FUNCTION updateVariety(json);

CREATE FUNCTION
    updateVariety(jvariety json)
    RETURNS "variety" AS $$
UPDATE "variety" SET
    "name" = jvariety->> 'name',
    picture = jvariety->> 'picture',
    family_id = (jvariety->> 'family_id')::int
WHERE id = (jvariety->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
