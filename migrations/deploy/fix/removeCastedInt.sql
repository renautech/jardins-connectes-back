-- Deploy jardins-connectes:fix/removeCastedInt to pg

BEGIN;

DROP FUNCTION newUser(json);

DROP FUNCTION newUserWithoutRole(json);

DROP FUNCTION updateUser(json);

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
    "role"
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
    juser->> 'role'

) RETURNING *;
$$ LANGUAGE sql STRICT;

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
    juser->> 'postcode',
    (juser->> 'department')::text,
    juser->> 'country',
    juser->> 'email',
    juser->> 'password',
    juser->> 'nickname',
    juser->> 'profile_picture'

) RETURNING *;
$$ LANGUAGE sql STRICT;

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
    "role" = juser->> 'role'
WHERE id = (juser->> 'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;



COMMIT;
