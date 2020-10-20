-- Deploy jardins-connectes:functions/newOperationType to pg

BEGIN;

CREATE FUNCTION
    newOperationType(joptype json)
    RETURNS "operation_type" AS $$
INSERT INTO "operation_type" (
    "name",
    "description"
) VALUES(
    joptype->> 'name',
    joptype->> 'description'
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
