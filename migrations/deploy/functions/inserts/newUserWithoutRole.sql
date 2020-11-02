-- Deploy jardins-connectes:functions/inserts/newUserWithoutRole to pg

BEGIN;


CREATE FUNCTION
    newUserWithoutRole(juser json)
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
    profile_picture
) VALUES(
    juser->> 'first_name',
    juser->> 'last_name',
    juser->> 'street_name',
    (juser->> 'street_number')::int,
    juser->> 'town',
    (juser->> 'postcode')::int,
    (juser->> 'department')::text,
    juser->> 'country',
    juser->> 'email',
    juser->> 'password',
    juser->> 'nickname',
    juser->> 'profile_picture'

) RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
