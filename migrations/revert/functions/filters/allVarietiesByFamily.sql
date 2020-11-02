-- Revert jardins-connectes:functions/filters/allVarietiesByFamily from pg

BEGIN;

DROP FUNCTION findVarietiesByFamily(int);

COMMIT;
