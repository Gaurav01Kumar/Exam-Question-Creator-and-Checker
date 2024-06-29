CREATE OR REPLACE PROCEDURE create_user(
    _email character varying,
    _pwd character varying,
    _first_name character varying,
    _last_name character varying,
    _institue_name character varying,
    _user_name character varying,
    _role character varying,
    INOUT _user_details refcursor
) LANGUAGE plpgsql AS $BODY$
DECLARE
    _user_id bigint;
BEGIN
    -- Insert into the 'users' table
    INSERT INTO users(email, pwd,role, created_at, updated_at)
    VALUES (_email, _pwd,_role, now(), now())
    RETURNING id INTO _user_id;

    -- Insert into the 'profiles' table
    INSERT INTO profiles(user_id, first_name, last_name,institue_name,user_name, created_at, updated_at)
    VALUES (_user_id, _first_name, _last_name,_institue_name,_user_name, now(), now());

    -- Open the refcursor with user details
    OPEN _user_details FOR
    SELECT u.email,u.role, p.first_name, p.last_name,p.institue_name,p.user_name
    FROM users u
    INNER JOIN profiles p ON p.user_id = u.id
    WHERE u.id = _user_id;

    -- Specify the return type as refcursor
    
END;
$BODY$;



CREATE OR REPLACE PROCEDURE get_user_by_email(
    _email character varying,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
   -- Check if the user is available or not
   OPEN _results FOR
   SELECT * FROM users WHERE email = _email;

END;
$BODY$;

---get user by email and password both
CREATE OR REPLACE PROCEDURE get_user_by_email_password(
    _email character varying,
    _pwd character  varying,
    INOUT _user_details refcursor
)LANGUAGE plpgsql AS $BODY$
BEGIN 
   ---Check if the user is available or not 
   OPEN _user_details FOR
   SELECT u.id,u.email,u.role ,p.id,p.first_name,p.last_name
   FROM users u INNER JOIN profiles p ON p.user_id=u.id
   WHERE u.email=_email AND u.pwd=_pwd;

END;
$BODY$;