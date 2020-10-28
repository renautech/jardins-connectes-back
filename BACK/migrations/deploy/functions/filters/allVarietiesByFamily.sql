-- Deploy jardins-connectes:functions/filters/allVarietiesByFamily to pg

BEGIN;

CREATE FUNCTION 
findVarietiesByFamily(familyId int)
RETURNS TABLE ("name" text, "id" int) AS $$
SELECT "name", "id" 
FROM variety 
WHERE family_id = familyId
$$ LANGUAGE sql STRICT;

COMMIT;
