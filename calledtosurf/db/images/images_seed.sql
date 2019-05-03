drop table if exists images;

create table images
(
img_id serial primary key,
img text,
product_id integer,
main boolean
);

select *
from images;
