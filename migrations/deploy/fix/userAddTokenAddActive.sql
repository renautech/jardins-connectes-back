-- Deploy jardins-connectes:fix/userAddTokenAddActive to pg

BEGIN;

ALTER TABLE public.user
ADD COLUMN token int,
ADD COLUMN active boolean;

COMMIT;
