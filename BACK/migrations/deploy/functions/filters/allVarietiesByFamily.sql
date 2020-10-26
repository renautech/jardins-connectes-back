-- Deploy jardins-connectes:functions/filters/allVarietiesByFamily to pg

BEGIN;

CREATE FUNCTION 
findVarietiesByFamily(familyId int)
RETURNS TABLE ("name" text) AS $$
SELECT "name" 
FROM variety 
WHERE family_id = familyId
$$ LANGUAGE sql STRICT;

COMMIT;
