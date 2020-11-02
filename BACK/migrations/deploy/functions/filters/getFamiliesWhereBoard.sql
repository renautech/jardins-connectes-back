-- Deploy jardins-connectes:views/familyWhereBoard to pg

BEGIN;

CREATE FUNCTION
    findWhereActiveBoardsByUser(userId int)
    RETURNS SETOF family AS $$
SELECT family.*
FROM "family"
WHERE "id" IN	(
		SELECT "family"."id"
		FROM "board" 
		JOIN "variety" ON "variety"."id" = "board"."variety_id"
		JOIN "family" ON "family"."id" = "variety"."family_id"
		WHERE "board"."active" = true AND "board"."user_id" = userId
		GROUP BY "family"."id"
);
$$ LANGUAGE sql VOLATILE STRICT;

COMMIT;