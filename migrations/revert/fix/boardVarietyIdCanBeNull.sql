-- Revert jardins-connectes:fix/boardVarietyIdCanBeNull from pg

BEGIN;

ALTER TABLE board
    ALTER COLUMN variety_id SET NOT NULL;

COMMIT;
