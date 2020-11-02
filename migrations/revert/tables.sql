-- Revert jardins-connectes:tables from pg

BEGIN;

DROP TABLE operation;

DROP TABLE operation_type;

DROP TABLE photo;

DROP TABLE board;

DROP TABLE variety;

DROP TABLE family;

DROP TABLE "user";

COMMIT;
