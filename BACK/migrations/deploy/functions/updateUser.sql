-- Deploy jardins-connectes:functions/updateUser to pg

BEGIN;

CREATE FUNCTION
    updateUser(juser json)
    RETURNS "user" AS $$
UPDATE "user" SET
    first_name = juser->> 'first_name',
    last_name = juser->> 'last_name',
    street_name = juser->> 'street_name',
    street_number = (juser->> 'street_number')::int,
    town = juser->> 'town',
    postcode = (juser->> 'postcode')::int,
    department = (juser->> 'department')::text,
    country = juser->> 'country',
    email = juser->> 'email',
    "password" = juser->> 'password',
    nickname = juser->> 'nickname',
    profile_picture =  juser->> 'profile_picture'
WHERE id = (juser->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
