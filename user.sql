-- Table: public.user

DROP TABLE IF EXISTS public.user;

CREATE TABLE IF NOT EXISTS public.user
(
    id serial PRIMARY KEY,
    name character varying(300),
    contact_number character varying(20),
    email character varying(50)
)

TABLESPACE pg_default;

-- premtest is my localDB user name
ALTER TABLE IF EXISTS public.user
    OWNER to premtest;