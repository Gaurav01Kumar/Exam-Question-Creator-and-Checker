CREATE OR REPLACE FUNCTION create_results(
    _class_id bigint,
    _subject_id bigint,
    _title character varying,
    _roll bigint,
    _division character varying,
    _data JSONB,
    _totalMarks bigint,
    _percentage bigint,
    _percentile bigint,
    INOUT _results_data refcursor
) LANGUAGE plpgsql AS $BODY$
DECLARE
    _id bigint;
BEGIN
    -- Insert result data into the results table
    INSERT INTO results(class_id, subject_id, title, roll, division, data, totalMarks, percentage, percentile, created_at, updated_at)
    VALUES (_class_id, _subject_id, _title, _roll, _division, _data, _totalMarks, _percentage, _percentile, now(), now())
    RETURNING id INTO _id;

    OPEN _results_data FOR
    SELECT * FROM results
    WHERE id = _id;
END;
$BODY$;


CREATE OR REPLACE PROCEDURE get_results(
    INOUT _results_data refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
   OPEN _results_data FOR
   SELECT c.id, c.name, s.id, s.name, 
   title, roll, division, data,
    totalMarks, percentage, percentile
   FROM results r
   JOIN classes c ON r.class_id = c.id
   JOIN subjects s ON r.subject_id = s.id;
END;
$BODY$;
