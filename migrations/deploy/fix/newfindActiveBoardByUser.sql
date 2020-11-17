-- Deploy jardins-connectes:fix/newfindActiveBoardByUser to pg

BEGIN;

DROP FUNCTION public.findactiveboardbyuser(integer);

CREATE FUNCTION 
findActiveBoardByUser(userId int)
RETURNS SETOF board AS $$
SELECT board.*
FROM board 
WHERE board.variety_id IS NULL;
$$ LANGUAGE sql STRICT;

COMMIT;
