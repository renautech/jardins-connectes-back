-- Revert jardins-connectes:functions/updateBoard from pg

BEGIN;

DROP FUNCTION updateBoard(json);

COMMIT;
