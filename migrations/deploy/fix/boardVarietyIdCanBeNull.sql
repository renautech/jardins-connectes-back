-- Deploy jardins-connectes:fix/boardVarietyIdCanBeNull to pg

BEGIN;

ALTER TABLE board
    ALTER COLUMN variety_id DROP NOT NULL;

COMMIT;
