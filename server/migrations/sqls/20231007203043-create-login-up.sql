CREATE TABLE users (
    id serial PRIMARY KEY,
    email character varying(100),
    pwd character varying(200),
    role character varying(200),
    created_at timestamp without time zone,
    created_by bigint NULL,
    updated_at timestamp without time zone,
    updated_by bigint NULL
);
