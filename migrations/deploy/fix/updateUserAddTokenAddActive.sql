-- Deploy jardins-connectes:fix/updateUserAddTokenAddActive to pg

BEGIN;

DROP FUNCTION updateUser(juser json);

CREATE FUNCTION
    updateUser(juser json)
    RETURNS "user" AS $$
UPDATE "user" SET
    first_name = juser->> 'first_name',
    last_name = juser->> 'last_name',
    street_name = juser->> 'street_name',
    street_number = (juser->> 'street_number')::int,
    town = juser->> 'town',
    postcode = juser->> 'postcode',
    department = (juser->> 'department')::text,
    country = juser->> 'country',
    email = juser->> 'email',
    "password" = juser->> 'password',
    nickname = juser->> 'nickname',
    profile_picture =  juser->> 'profile_picture',
    "role" = juser->> 'role',
    token = (juser->> 'token')::int,
    active = (juser->> 'active')::boolean
WHERE id = (juser->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;