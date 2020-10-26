-- Deploy jardins-connectes:functions/filters/findBoardsByFamilyByUser to pg

BEGIN;

CREATE FUNCTION
    findBoardsByFamilyByUser("userId" int, "familyId" int)
    RETURNS TABLE ("name" text) AS $$
SELECT "board"."name"
FROM "board" 
JOIN "variety" ON "variety"."id" = "board"."variety_id"
WHERE "board"."user_id" = "userId" AND "board"."active" = true AND "variety"."family_id" = "familyId"

$$ LANGUAGE sql STRICT;

COMMIT;
