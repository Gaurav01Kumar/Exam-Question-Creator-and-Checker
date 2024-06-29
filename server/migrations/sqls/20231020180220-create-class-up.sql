/* Replace with your SQL commands */
CREATE TABLE classes(
    id serial PRIMARY KEY,
    name character varying(200),
    created_at timestamp without time zone,
    created_by bigint NULL,
    updated_at timestamp without time zone,
    updated_by bigint NULL
);