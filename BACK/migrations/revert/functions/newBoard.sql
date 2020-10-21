-- Revert jardins-connectes:functions/newBoard from pg

BEGIN;

DROP FUNCTION newBoard(json);

COMMIT;
