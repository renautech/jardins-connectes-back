-- Deploy jardins-connectes:functions/updateOperationType to pg

BEGIN;

CREATE FUNCTION
    updateOperationType(joptype json)
    RETURNS "operation_type" AS $$
UPDATE "operation_type" SET
    "name" = joptype->> 'name',
    "picture" = joptype->> 'picture',
    "description" = joptype->> 'description'
WHERE id = (joptype->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
