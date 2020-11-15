-- Revert jardins-connectes:family_id_fk_variety from pg

BEGIN;

ALTER TABLE variety
    DROP CONSTRAINT variety_family_id_fkey;

ALTER TABLE variety
    ADD FOREIGN KEY (family_id)
    REFERENCES family ON DELETE CASCADE;

COMMIT;
