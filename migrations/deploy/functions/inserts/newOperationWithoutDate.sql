-- Deploy jardins-connectes:functions/newOperationWithoutDate to pg

BEGIN;

CREATE FUNCTION
    newOperationWithoutDate(joperation json)
    RETURNS operation AS $$
INSERT INTO operation (
    quantity,
    product_name,
    maker,
    comment,
    operation_type_id,
    board_id
) VALUES(
    (joperation->> 'quantity')::float,
    joperation->> 'product_name',
    joperation->> 'maker',
    joperation->> 'comment',
    (joperation->> 'operation_type_id')::int,
    (joperation->> 'board_id')::int
) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
