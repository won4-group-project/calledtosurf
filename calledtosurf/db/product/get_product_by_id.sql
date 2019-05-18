select *
from products p
join images i
on p.product_id =  i.img_id
where p.product_id = $1;



