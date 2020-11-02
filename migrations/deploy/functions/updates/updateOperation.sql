-- Deploy jardins-connectes:functions/updateOperation to pg

BEGIN;

CREATE FUNCTION
    updateOperation(joperation json)
    RETURNS operation AS $$
UPDATE operation SET
    "date" = (joperation->> 'date')::date,
    quantity = (joperation->> 'quantity')::float,
    product_name = joperation->> 'product_name',
    maker = joperation->> 'maker',
    comment = joperation->> 'comment',
    operation_type_id = (joperation->> 'operation_type_id')::int,
    board_id = (joperation->> 'board_id')::int
WHERE id = (joperation->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
