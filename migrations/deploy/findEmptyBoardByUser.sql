-- Deploy jardins-connectes:findEmptyBoardByUser to pg

BEGIN;

DROP FUNCTION public.findactiveboardbyuser(integer);

CREATE FUNCTION 
findEmptyBoardByUser(userId int)
RETURNS SETOF board AS $$
SELECT board.*
FROM board 
WHERE board.variety_id IS NULL;
$$ LANGUAGE sql STRICT;

COMMIT;
