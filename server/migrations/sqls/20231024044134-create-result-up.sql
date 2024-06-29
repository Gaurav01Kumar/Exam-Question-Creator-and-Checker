/* Replace with your SQL commands */
CREATE TABLE results(
    id serial PRIMARY KEY,
    class_id bigint REFERENCES classes(id),
    subject_id bigint REFERENCES subjects(id),
    title character varying(400),
    roll bigint,
    division character varying(200),
    data JSONB,
    totalMarks bigint,
    percentage bigint,
    percentile bigint,
    created_at timestamp,
    updated_at timestamp,
    created_by bigint,
    updated_by bigint
)