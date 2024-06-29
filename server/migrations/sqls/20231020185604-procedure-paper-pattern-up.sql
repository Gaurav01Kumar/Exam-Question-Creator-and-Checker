 -- Create or Replace Procedure to Create Paper Pattern
CREATE OR REPLACE PROCEDURE create_paper_pattern(
    _class_id bigint,
    _subject_id bigint,
    _name character varying,
    _data JSONB,
    _user_id bigint ,
    INOUT _paper_pattern_details refcursor
) LANGUAGE plpgsql AS $BODY$
DECLARE
    _id bigint;
BEGIN
    -- Insert into paper_patterns table
    INSERT INTO paper_patterns (class_id, subject_id, name, data, user_id, created_at, updated_at)
    VALUES (_class_id, _subject_id, _name, _data,_user_id, NOW(), NOW())
    RETURNING id INTO _id;

    OPEN _paper_pattern_details FOR
    SELECT *
    FROM paper_patterns
    WHERE id = _id;
END;
$BODY$;

-- Create or Replace Procedure to List Paper Patterns
CREATE OR REPLACE PROCEDURE paper_patterns_list(
    INOUT _paper_patterns_data refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _paper_patterns_data FOR
    SELECT  p.name,
        c.id AS class_id, c.name AS class_name,
        s.id AS subject_id, s.name AS subject_name,
        p.id AS paper_id, p.data AS paper_data
    FROM
        paper_patterns p
    JOIN classes c ON p.class_id = c.id
    JOIN subjects s ON p.subject_id = s.id;
END;
$BODY$;

-- Create or Replace Procedure to Get Paper Patterns by Subject
CREATE OR REPLACE PROCEDURE get_paper_patterns_by_subject_class(
    _subject_id bigint,
    _class_id bigint,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT *
    FROM paper_patterns
    WHERE subject_id = _subject_id and class_id=_class_id;
END;
$BODY$;

-- Create or Replace Procedure to Get Paper Patterns by ID
CREATE OR REPLACE PROCEDURE get_paper_patterns_by_id(
    _id bigint,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT *
    FROM paper_patterns
    WHERE id = _id;
END;
$BODY$;
CREATE OR REPLACE PROCEDURE getTitle(
    class_id bigint,
    subject_id bigint,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT title
    FROM paper_patterns
    WHERE subject_id = _subject_id and class_id=_class_id;
END;
$BODY$;
---get pattern data with subjectid , title , classid
CREATE OR REPLACE PROCEDURE get_paper_patterns_by_class_subject_title(
    _class_id bigint,
    _subject_id bigint,
    _title character varying,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT name
    FROM paper_patterns
    WHERE class_id=_class_id and subject_id=_subject_id and name=_title;
END;
$BODY$;