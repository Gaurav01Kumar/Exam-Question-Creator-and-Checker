CREATE TABLE profiles (
    id serial PRIMARY KEY,
    user_id bigint REFERENCES users(id),
    first_name character varying(100),
    last_name character varying(100),
    institue_name character varying(200),
    user_name character varying(200),
    created_at timestamp,
    updated_at timestamp,
    created_by bigint,
    updated_by bigint
);
