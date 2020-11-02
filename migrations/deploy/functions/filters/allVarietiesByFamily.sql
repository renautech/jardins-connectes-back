-- Deploy jardins-connectes:functions/filters/allVarietiesByFamily to pg

BEGIN;

CREATE FUNCTION 
findVarietiesByFamily(familyId int)
RETURNS TABLE ("name" text, "id" int) AS $$
SELECT variety."name", variety."id" 
FROM variety
WHERE variety.family_id = familyId
$$ LANGUAGE sql STRICT;

COMMIT;
