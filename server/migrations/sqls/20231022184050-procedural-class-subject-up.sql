/* Replace with your SQL commands */-- Create or Replace Procedure to Create Subject
CREATE OR REPLACE PROCEDURE create_subject(
    _name character varying,
    INOUT _subject_details refcursor
) LANGUAGE plpgsql AS $BODY$
DECLARE
    _id bigint;
BEGIN
    -- Insert into subjects table
    INSERT INTO subjects(name, created_at, updated_at)
    VALUES (_name, NOW(), NOW())
    RETURNING id INTO _id;

    OPEN _subject_details FOR
    SELECT *
    FROM subjects
    WHERE id = _id;
END;
$BODY$;

-- Create or Replace Procedure to List Subjects
CREATE OR REPLACE PROCEDURE subject_list(
    INOUT _subject_data refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _subject_data FOR
    SELECT *
    FROM subjects;
END;
$BODY$;

-- Create or Replace Procedure to Get Subject by Name
CREATE OR REPLACE PROCEDURE get_subject_by_name(
    _name character varying,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT *
    FROM subjects
    WHERE name = _name;
END;
$BODY$;

-- Create or Replace Procedure to Get Subject by ID
CREATE OR REPLACE PROCEDURE get_subject_by_id(
    _id character varying,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT *
    FROM subjects
    WHERE id = _id;
END;
$BODY$;

-- Create or Replace Procedure to Create Class
CREATE OR REPLACE PROCEDURE create_class(
    _name character varying,
    INOUT _class_details refcursor
) LANGUAGE plpgsql AS $BODY$
DECLARE
    _id bigint;
BEGIN
    -- Insert into classes table
    INSERT INTO classes(name, created_at, updated_at)
    VALUES (_name, NOW(), NOW())
    RETURNING id INTO _id;

    OPEN _class_details FOR
    SELECT *
    FROM classes
    WHERE id = _id;
END;
$BODY$;

-- Create or Replace Procedure to List Classes
CREATE OR REPLACE PROCEDURE class_list(
    INOUT _class_data refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _class_data FOR
    SELECT *
    FROM classes;
END;
$BODY$;

-- Create or Replace Procedure to Get Class by Name
CREATE OR REPLACE PROCEDURE get_class_by_name(
    _name character varying,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT *
    FROM classes
    WHERE name = _name;
END;
$BODY$;

-- Create or Replace Procedure to Get Class by ID
CREATE OR REPLACE PROCEDURE get_class_by_id(
    _id character varying,
    INOUT _results refcursor
) LANGUAGE plpgsql AS $BODY$
BEGIN
    OPEN _results FOR
    SELECT *
    FROM classes
    WHERE id = _id;
END;
$BODY$;
