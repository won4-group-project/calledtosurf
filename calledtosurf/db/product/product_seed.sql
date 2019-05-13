drop table if exists products;

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


INSERT INTO products (category, title, description, sizes, price, item_num) 

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
('Top', 'Natasha Top', 'Loose fitting lightweight woven top with eyelet sleeves and yoke and embroidery at hem. Lined.', 'XS S M L XL', 46, 21),
('Top', 'Rosebud', 'Lightweight top with ruffles around neck, sleeves and hem.','S M L', 34, 22),
('Top', 'Temecula Top', 'Soft knit pullover top with high round collar and single front patch pocket.', 'XS S M L XL XXL', 30, 23),
('Top', 'Waymen Tee', 'Stripe round neck tee with short sleeves and split high/low hemline.', 'S M L', 28, 24),
('Bottoms', 'Cocoa Short', 'Stretch denim short with fray hem.', 'XS S M L', 34, 25),
('Bottoms', 'Desert Pant', 'High rise pant with paperbag waist, twist tie belt and pockets.', 'S M L', 49, 26),
('Bottoms', 'Esme Jean', 'Skinny jeans with 5 pockets and button-up closure.', '0 2 4 6 8 10 12 14', 48, 27),
('Bottoms', 'Exby Overall', 'Distressed loose fitting short overalls with front patch pocket.', 'S M L', 34, 28),
('Bottoms', 'Hampshire Jean', 'Distressed skinny jeans with unhemmed ankles.', '0 2 4 6 8 10 12 14', 44, 29),
('Bottoms', 'Harper Pant', 'Woven stripe pants with elastic waist, drawstring tie, and pockets.', 'S M L', 36, 30),
('Bottoms', 'Lil Fleece Pant', 'Soft fleece sweatpants.', 'XS S M L', 25, 31),
('Bottoms', 'Longwood Skinnys', 'Skinny cut corduroy pants.', '25 26 27 28 29 30 31', 68, 32),
('Bottoms', 'Peirson Jean', 'Distressed skinny jeans with cut hem.', '24 25 26 27 28 29 30 31', 66, 33),
('Bottoms', 'Skyline Overall,', 'Textured overall with large front patch pocket, tied straps with side buttons and back elastic waist.', 'S M L', 44, 34),
('Bottoms', 'Sonnett Jean', 'Skinny jeans with a higher rise and frayed hemline.', '24 25 26 27 28 29 30 31', 58, 35),
('Bottoms', 'Waycross Skinnys', 'Skinny jean with distressed knees and hem.', '24 25 26 27 28 29 30 31', 72, 36),
('Swimwear', 'All Checked Out', 'Gingham print one piece swimsuit with narrow criss-cross adjustable straps. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 54, 37),
('Swimwear', 'All Tied Up', 'Floral print one piece swimsuit with narrow lace insets, narrow straps and lace-up back. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 59, 38),
('Swimwear', 'Classic Cut Out', 'Two color swimsuit with white ruched top and contrasting high waisted bottom with front cutout. Cups are foam lined. Foam cups removable.', 49, 39),
('Swimwear', 'Flowers For Days', 'Textured floral print one piece swimsuit. Cups are foam lined. Foam cups removable.', 54, 40),
('Swimwear', 'Nautical Stripe', 'Seer sucker textured stripe v-neck swimsuit with crisscross straps and contrasting trim. Fully lined. Cups are foam lined.', 'S M L', 40, 41),
('Swimwear', 'Pinstripe One Piece', 'V-neck tank swimsuit with tie belt. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 59, 42),
('Swimwear', 'Poolside Criss-Cross', 'One piece swimsuit with lace-up back. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 52, 43),
('Swimwear', 'Scoop Neck Gingham', 'One piece swimsuit with lace-up back. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 49, 44),
('Swimwear', 'Signature Bow Tie', 'One piece tank swimsuit with v-neckline and bows inset in neckline. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 59, 45),
('Swimwear', 'The Beach Babe', 'One piece tank swimsuit with v-neckline and bows inset in neckline. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 49, 46),
('Swimwear', 'The Neapolitan', 'Tri color one piece tank swimsuit with crossing bodice panels - front & back. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 56, 47),
('Swimwear', 'Waist Tie One Piece', 'One piece tank style swimsuit with tie belt and can be tied in front or in back. Cups are foam lined. Foam cups removable.', 'XS S M L XL', 52, 48),
('Boots', 'Barrow Bootie', 'Open toe bootie with low stacked heel.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 46, 49),
('Boots', 'Carter Bootie', 'Low heel shoe with strappy woven upper.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 52, 50),
('Boots', 'Carter Slip-On', 'Slip-on shoe with low stacked heel.', '5.5 6 6.5 7', 27, 51),
('Boots', 'Karisa Bootie', 'Open toe bootie with low stacked heel.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 36, 52),
('Boots', 'Summer Black Bootie', 'Seychelles Closed toe shoe with side zipper and low stacked heel.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 66, 53),
('Boots', 'Summer Brown Bootie', 'Seychelles Closed toe shoe with side zipper and low stacked heel.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 66, 54),
('Boots', 'Summer Gray Bootie', 'Seychelles Closed toe shoe with side zipper and low stacked heel.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 66, 55),
('Boots', 'Ollie Black Bootie', 'Short heeled bootie with elastic side panels.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 33, 56),
('Boots', 'Ollie Brown Bootie', 'Short heeled bootie with elastic side panels.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 33, 57),
('Boots', 'Primetime Bootie', 'Low heel bootie with eyelet cutout detail.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 27, 58),
('Heels', 'Abba Black Clog', 'Closed toe Swedish clog.', '6 7 8 9 10', 99, 59),
('Heels', 'Abba Brown Clog', 'Closed toe Swedish clog.', '6 7 8 9 10', 99, 60),
('Heels', 'Abba Navy Clog', 'Closed toe Swedish clog.', '6 7 8 9 10', 99, 61),
('Heels', 'Caris Heel', 'Stacked heel dress shoe wide straps and large buckle.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 40, 62),
('Heels', 'Doria Open Toe', 'Open toe sandal with staked heel and wide buckled ankle strap.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 38, 63),
('Heels', 'Madeline Clog', 'Wodden clogg with rubber sole and t-strap upper.', '6 7 8 9 10', 109, 64),
('Sandals', 'Abby Sandal', 'Low platform sandal with buckle.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 35, 65),
('Sandals', 'Deana Brown Sandal', 'Flat sandal with criss -cross upper.', '6 6.5 7 7.5 8 8.5', 49, 66),
('Sandals', 'Deana Black Sandal', 'Flat sandal with criss -cross upper.', '6 6.5 7 7.5 8 8.5', 49, 67),
('Sandals', 'Lunna Black Sandal', 'Flat platform sandal with ankle strap.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 69, 68),
('Sandals', 'Lunna Brown Sandal', 'Flat platform sandal with ankle strap.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 69, 69),
('Sandals', 'Saige Gold Sandal', 'Slip-on platform sandal.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 39, 70),
('Sandals', 'Saige Silver Sandal', 'Slip-on platform sandal.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 39, 71),
('Sandals', 'Summer Pink Sandal', '2 buckle flat sandals.', '7', 24, 72),
('Sandals', 'Summer White Sandal', '2 buckle flat sandals.', '5.5 5.6', 24, 73),
('Sandals', 'Topic Black Sandal', 'Wedge platform sandal with ankle strap.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 40, 74),
('Sandals', 'Topic Tan Sandal', 'Wedge platform sandal with ankle strap.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 40, 75),
('Sandals', 'Yuka Strap Slide', 'Double strap slide shoes with thick sole.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 36, 76),
('Sneakers', 'Christian Black Sneaker', 'Lace-up sneaker with knit upper.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 42, 77),
('Sneakers', 'Christian Grey Sneaker', 'Lace-up sneaker with knit upper.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 42, 78),
('Sneakers', 'Black Canvas Sneaker', 'Lace-up platform sneaker with canvas upper.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 52, 79),
('Sneakers', 'White Canvas Sneaker', 'Lace-up platform sneaker with canvas upper.', '6 6.5 7 7.5 8 8.5 9 9.5 10', 52, 80),
('Sneakers', 'Leather Sneaker', 'Keds Lace-up platform sneaker with leather upper.', '6 7 7.5 8 8.5 9 9.5 10', 60, 81),
('Sneakers', 'Radial Sneaker', 'Slip on sneaker with laces, knit upper.', '6 7 8 9 10', 34, 82),
('Sneakers', 'Roman Shoe', 'Shoe with huarache upper and rubber shoe sole.', '5.5 6 6.5 7 7.5 8 8.5 9 10', 46, 83),
('Hats', 'Bryant Beanie', 'Knit beanie', 'One Size', 15, 84),
('Hats', 'Eaton Hat', 'Felt brim hat with knotted hatband.', 'One Size', 38, 85),
('Hats', 'Gunnison Hat', 'Faux suede brim hat with braided hat band.', 'One Size', 34, 86),
('Hats', 'Jerome Hat', 'Felt brimmed hat with grosgrain ribbon hat band.', 'One Size', 38, 87),
('Hats', 'Lux Cap', 'Billabong tie-dye cap.', 'One Size', 25, 88),
('Hats', 'Mineral Wash Cap', 'Mineral wash baseball cap.', 'One Size', 16, 89),
('Hats', 'RVCA Cap', 'RVCA print adjustable cap.', 'One Size', 27, 90),
('Hats', 'Stars & Stripes Cap', 'Baseball cap in patriotic colors.', 'One Size', 16, 91),
('Hats', 'Sun Day Cap', 'Adjustable baseball cap with embroidered “called to surf” logo on back.', 'One Size', 16, 92), 
('Hats', 'Surf Cap', 'Billabong adjustable cap with “SURF” embroidered graphic.', 'One Size', 23, 93),
('Hats', 'Winnepeg Beanie', 'Soft chenille ribbed beanie.', 'One Size', 22, 94),
('Hats', 'Winter Beanie', 'Rib knit beanie with pom pom.', 'One Size', 25, 95),
('Jewelry', 'Box Chain Necklace', '16" Gold box chain necklace with a peach gem.', 'One Size', 14, 96),
('Jewelry', 'Corded Bracelet', '9 strand corded bracelet with slide closure and single charm.', 'One Size', 6, 97),
('Jewelry', 'Gold Beaded Chain', 'Vermeil chain in 3 lengths. Mix and match with letter tags, briolette stones and heart tags. Chains and other pendents available.', '16" 18" 20"', 18, 98),
('Jewelry', 'Gold Hoop Earrings', '1" gold finish hoop earrings.', '1', 10, 99),
('Jewelry', 'Gold Wave Ring', 'Gold ring with band in wave shape.', '6 7', 12, 100),
('Jewelry', 'Jeweled Color Necklace', '16" Gold Chain with multiple jewel colored stones.', 'One Size', 14, 101),
('Jewelry', 'Letter Tag Necklace', '14K gold filled disc measuring approximately 3/8″ in block font. Mix and match pendants for initials and etc.', 'a b c d e f g h i j k l m n o p q r s t u v w x y z', 18.50, 102),
('Jewelry', 'Love Ring Set', '14K set of 4 letter rings spelling the word “love” in lower case.', '5 6 2007', 64, 103),
('Jewelry', 'Mom Tag', '14K gold filled disc measuring approximately .5″ in block font. Mix and match pendants for initials and etc. Chains and other pendents available.', 'One Size', 26, 104),
('Jewelry', 'Mountain Bracelet', 'Double stranded bracelet with mountain cutout charm', 'One Size', 15, 105),
('Jewelry', 'Star Earring', 'Gold finish 8 point star post earring.', '1.2', 10, 106),
('Purses', 'Carmen Folded Purse', 'Folding purse with single exterior zipper pocket and multiple zipper and slide-in pockets for cards. Including wrist strap and long adjustable shoulder strap.', 
'One Size', 32, 107),
('Purses', 'Hamlin Clutch', 'Clutch handbag with 2 exterior zipper pockets, 1 small interior pockets and straps of 2 lengths', 'One Size', 32, 108),
('Purses', 'Maxwell Bag', 'Purse with long adjustable shoulder strap, with multiple interior and exterior pockets.', 'One Size', 51, 109),
('Purses', 'Montrose Purse', 'Clutch size purse with curved corners, zipper closure, wrist strap and long purse strap.', 'One Size', 32, 110),
('Purses', 'Pippen Purse', 'Clutch size purse with 2 exterior zippers, and 2 large interior compartments.', 'One Size', 34, 111),
('Purses', 'Ruskin Pink Bags', 'Solid colored bag with contrasting handles, additionial smaller bag and an additional shoulder strap that can attatch to either bag.', 'One Size', 52, 112),
('Purses', 'Ruskin Brown Bags', 'Solid colored bag with contrasting handles, additionial smaller bag and an additional shoulder strap that can attatch to either bag.', 'One Size', 52, 113),
('Purses', 'Torrey Purse', 'Small purse with exterior pocket with multiple card slots and 1 interior zipper pocket and adjustable strap.', 'One Size', 40, 114),
('Purses', 'Vestige Black Bag', 'Solid colored bag with contrasting handles, additionial smaller bag and an additional shoulder strap that can attatch to either bag.', 'One Size', 62, 115),
('Purses', 'Vestige Brown Bag', 'Solid colored bag with contrasting handles, additionial smaller bag and an additional shoulder strap that can attatch to either bag.', 'One Size', 62, 116);

























































































































































































































































































































































































































































