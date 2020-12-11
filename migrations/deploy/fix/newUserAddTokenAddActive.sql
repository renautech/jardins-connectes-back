-- Deploy jardins-connectes:fix/userAddTokenAddActive to pg

BEGIN;

DROP FUNCTION newUser(json);

CREATE FUNCTION
    newUser(juser json)
    RETURNS "user" AS $$
INSERT INTO "user" (
    first_name,
    last_name,
    street_name,
    street_number,
    town,
    postcode,
    department,
    country,
    email,
    "password",
    nickname,
    profile_picture,
    "role",
    token,
    active
) VALUES(
    juser->> 'first_name',
    juser->> 'last_name',
    juser->> 'street_name',
    (juser->> 'street_number')::int,
    juser->> 'town',
    juser->> 'postcode',
    (juser->> 'department')::text,
    juser->> 'country',
    juser->> 'email',
    juser->> 'password',
    juser->> 'nickname',
    juser->> 'profile_picture',
    juser->> 'role',
    (juser->> 'token')::int,
    (juser->> 'active')::boolean

) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
