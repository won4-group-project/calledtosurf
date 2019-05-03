create table products
(
product_id serial primary key,
category text,
title text,
description text,
sizes text,
price float(2),
item_num text
);
select * 
from products;


INSERT INTO products(category, title, description, sizes, price, item_num) 

VALUES 
('Dresses', 'Avondale Dress', 'Button-up dress with dirndle waist, embroidered front bodice, tie belt and front patch pockets.', 'S M L', 48 , 1), 
('Dresses', 'Carleton Dress', 'Lightweight woven print dress with flare sleeves, front buttons and tie belt.','XS S M L XL XXL', 54, 2 ),
('Dresses', 'Clio Dress', 'Wrap top polka dot dress with flare sleeves, elastic waist and bottom ruffle.', 'S M L', 52, 3),
('Dresses', 'Concerto Dress','Lined lace dress with short sleeves, round neckline and gathered waist.', 'S M L', 74 , 4),
('Dresses', 'Enchanted Dress', 'Lightweight woven dress with embroidered flowers, notched neckline with tie closure and pockets. Lined.', 'XS S M L XL XXL XXXL', 59, 5),
('Dresses', 'Haney Dress', 'Chambaray button-up dress with v-neckline, gathered waist and pockets.', 'S M L XL', 49, 6),
('Dresses', 'Kenosha Dress','Deep V-neck denim jumper with adjustable straps, with front & back pockets.', 'S M L', 42, 7),
('Dresses', 'Landry Dress', 'Very soft ribbed stripe dress with elastic waist, short sleeves and pockets.', 'S M L', 36, 8),
('Dresses', 'Madrid Dress', 'Vintage look print dress with wrap bodice, short sleeves, button-up skirt and large front pockets.', 'S M L', 46, 9),
('Dresses', 'Naples Maxi', 'Chiffon wrap maxi with long sleeves and tie belt. Lined.', 'XS S M L XL XXL XXXL', 52, 10),
('Dresses', 'Paloma Dress', 'Shirtwaist dress with short cuffed sleeves, hidden tie belt, gathered waist and pockets.', 'XS S M L XL XXL XXL', 50, 11),
('Dresses', 'Saratoga Dress', 'Soft knit stripe dress with cuffed short sleeves, tie belt and pockets.', 'S M L', 38, 12),
('Top', 'Boyfriend Tee', 'Wide stripe tee with short sleeves and contrasting ribbed neckline.', 'S M L ', 32, 13),
('Top', 'Carver Top', 'Lightweight stripe top wtih embroidered trim and tassle trimmed sleeves.', 'XS S M L', 40, 14),
('Top', 'Celeste Top', 'V-neck woven top with button-up sleeves and front waist tie.', 'S M L', 38, 15),
('Top', 'Cornell Top', 'Textured button-up stripe top with short cuffed sleeves, and folded collar.', 'S M L', 38, 16),
('Top', 'Decatur Top', 'Woven babydoll top with v-neckline and short sleeves.', 'S M L', 30, 17),
('Top', 'Jackson Tee', 'Tee with bright stripes, short sleeves and contrasting ribbed neckline.', 'S M L', 24, 18),
('Top', 'Martina Top', 'Loose fitting embroidered crepe textured top with short sleeves, v-neckline and gathered waist. Lined.', 'XS S M L XL XXL', 44, 19),
('Top', 'Melody Top', 'Lightweight woven top with front buttons at the side and short tie sleeves.', 'S M L', 40, 20),
('Top', 'Natasha Top', 'Loose fitting lightweight woven top with eyelet sleeves and yoke and embroidery at hem. Lined.', 'XS S M L XL', 46, 21)