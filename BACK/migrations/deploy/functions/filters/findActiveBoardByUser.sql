-- Deploy jardins-connectes:functions/filters/findActiveBoardByUser to pg

BEGIN;

CREATE FUNCTION 
findActiveBoardByUser(userId int)
RETURNS TABLE (name text) AS $$
SELECT *
FROM board 
JOIN variety on variety.id = board.variety_id
WHERE board.active = true and board.user_id = userId and variety.family_id = 1;
$$ LANGUAGE sql STRICT;

COMMIT;
