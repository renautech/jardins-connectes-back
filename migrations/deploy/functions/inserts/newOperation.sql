-- Deploy jardins-connectes:functions/newOperation to pg

BEGIN;

CREATE FUNCTION
    newOperation(joperation json)
    RETURNS operation AS $$
INSERT INTO operation (
    "date",
    quantity,
    product_name,
    maker,
    comment,
    operation_type_id,
    board_id
) VALUES(
    (joperation->> 'date')::date,
    (joperation->> 'quantity')::float,
    joperation->> 'product_name',
    joperation->> 'maker',
    joperation->> 'comment',
    (joperation->> 'operation_type_id')::int,
    (joperation->> 'board_id')::int
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
