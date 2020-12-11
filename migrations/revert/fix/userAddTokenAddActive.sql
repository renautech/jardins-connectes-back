-- Revert jardins-connectes:fix/userAddTokenAddActive from pg

BEGIN;

ALTER TABLE public.user
DROP COLUMN token,
DROP COLUMN active;

COMMIT;
