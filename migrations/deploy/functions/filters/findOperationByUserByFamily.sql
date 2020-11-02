-- Deploy jardins-connectes:findOperationByUserByFamily to pg

BEGIN;

CREATE FUNCTION
    operationByUserByFamily(userId int, familyId int)
    RETURNS SETOF operation AS $$
        SELECT operation.* 
        FROM operation
        JOIN board ON board.id = operation.board_id
        JOIN variety ON board.variety_id = variety.id
        WHERE board.user_id = userId AND variety.family_id = familyId
$$ LANGUAGE sql STRICT;

COMMIT;
