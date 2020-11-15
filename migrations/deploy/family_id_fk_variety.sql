-- Deploy jardins-connectes:family_id_fk_variety to pg

BEGIN;

ALTER TABLE variety
    DROP CONSTRAINT variety_family_id_fkey;

ALTER TABLE variety
    ADD FOREIGN KEY (family_id)
    REFERENCES family (family_id) ON DELETE CASCADE;

COMMIT;
