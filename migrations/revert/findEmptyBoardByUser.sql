-- Revert jardins-connectes:findEmptyBoardByUser from pg

BEGIN;

DROP FUNCTION public.findEmptyBoardByUser(integer);


CREATE FUNCTION 
findActiveBoardByUser(userId int)
RETURNS SETOF board AS $$
SELECT board.*
FROM board 
JOIN variety on variety.id = board.variety_id
WHERE board.active = true and board.user_id = userId and variety.family_id = 1;
$$ LANGUAGE sql STRICT;

COMMIT;
