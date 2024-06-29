CREATE TABLE paper_patterns (
    id serial PRIMARY KEY,
    class_id bigint REFERENCES classes(id),
    subject_id bigint REFERENCES subjects(id), -- Make sure the references are correct
    name character varying(300),
    data JSONB,
    user_id bigint REFERENCES users(id),
    created_at timestamp,
    updated_at timestamp,
    created_by bigint,
    updated_by bigint
);
