create table carts
(
cart_id serial primary key,
user_id integer,
product_id integer,
quantity integer
);

select *
from carts;
