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


INSERT INTO images(img, product_id, main)
VALUES
('calledtosurf/src/assets/Clothing/Dresses/1a.png', 1, true),
('calledtosurf/src/assets/Clothing/Dresses/1b.png', 1, false),
('calledtosurf/src/assets/Clothing/Dresses/2a.png', 2, true),
('calledtosurf/src/assets/Clothing/Dresses/3a.png', 3, true),
('calledtosurf/src/assets/Clothing/Dresses/3b.png', 3, false),
('calledtosurf/src/assets/Clothing/Dresses/4a.png', 4, true),
('calledtosurf/src/assets/Clothing/Dresses/4b.png', 4, false),
('calledtosurf/src/assets/Clothing/Dresses/5a.png', 5, true),
('calledtosurf/src/assets/Clothing/Dresses/5b.png', 5, false),
('calledtosurf/src/assets/Clothing/Dresses/6a.png', 6, true),
('calledtosurf/src/assets/Clothing/Dresses/6b.png', 6, false),
('calledtosurf/src/assets/Clothing/Dresses/7a.png', 7, true),
('calledtosurf/src/assets/Clothing/Dresses/7b.png', 7, false),
('calledtosurf/src/assets/Clothing/Dresses/8a.png', 8, true),
('calledtosurf/src/assets/Clothing/Dresses/8b.png', 8, false),
('calledtosurf/src/assets/Clothing/Dresses/9a.png', 9, true),
('calledtosurf/src/assets/Clothing/Dresses/9b.png', 9, false),
('calledtosurf/src/assets/Clothing/Dresses/10a.png', 10, true),
('calledtosurf/src/assets/Clothing/Dresses/10b.png', 10, false),
('calledtosurf/src/assets/Clothing/Dresses/11a.png', 11, true),
('calledtosurf/src/assets/Clothing/Dresses/11b.png', 11, false),
('calledtosurf/src/assets/Clothing/Dresses/12a.png', 12, true),
('calledtosurf/src/assets/Clothing/Dresses/12b.png', 12, false),
('calledtosurf/src/assets/Clothing/Tops/13a.png', 13, true),
('calledtosurf/src/assets/Clothing/Tops/13b.png', 13, false),
('calledtosurf/src/assets/Clothing/Tops/14a.png', 14, true),
('calledtosurf/src/assets/Clothing/Tops/14b.png', 14, false),
('calledtosurf/src/assets/Clothing/Tops/15a.png', 15, true),
('calledtosurf/src/assets/Clothing/Tops/15b.png', 15, false),
('calledtosurf/src/assets/Clothing/Tops/16a.png', 16, true),
('calledtosurf/src/assets/Clothing/Tops/16b.png', 16, false),
('calledtosurf/src/assets/Clothing/Tops/17a.png', 17, true),
('calledtosurf/src/assets/Clothing/Tops/17b.png', 17, false),
('calledtosurf/src/assets/Clothing/Tops/18a.png', 18, true),
('calledtosurf/src/assets/Clothing/Tops/18b.png', 18, false),
('calledtosurf/src/assets/Clothing/Tops/19a.png', 19, true),
('calledtosurf/src/assets/Clothing/Tops/19b.png', 19, false),
('calledtosurf/src/assets/Clothing/Tops/20a.png', 20, true),
('calledtosurf/src/assets/Clothing/Tops/20b.png', 20, false),
('calledtosurf/src/assets/Clothing/Tops/21a.png', 21, true),
('calledtosurf/src/assets/Clothing/Tops/21b.png', 21, false),
('calledtosurf/src/assets/Clothing/Tops/22a.png', 22, true),
('calledtosurf/src/assets/Clothing/Tops/22b.png', 22, false),
('calledtosurf/src/assets/Clothing/Tops/23a.png', 23, true),
('calledtosurf/src/assets/Clothing/Tops/23b.png', 23, false),
('calledtosurf/src/assets/Clothing/Tops/24a.png', 24, true),
('calledtosurf/src/assets/Clothing/Tops/24b.png', 24, false),
('calledtosurf/src/assets/Clothing/Bottoms/25a.png', 25, true),
('calledtosurf/src/assets/Clothing/Bottoms/25b.png', 25, false),
('calledtosurf/src/assets/Clothing/Bottoms/26a.png', 26, true),
('calledtosurf/src/assets/Clothing/Bottoms/26b.png', 26, false),
('calledtosurf/src/assets/Clothing/Bottoms/27a.png', 27, true),
('calledtosurf/src/assets/Clothing/Bottoms/27b.png', 27, false),
('calledtosurf/src/assets/Clothing/Bottoms/28a.png', 28, true),
('calledtosurf/src/assets/Clothing/Bottoms/28b.png', 28, false),
('calledtosurf/src/assets/Clothing/Bottoms/29a.png', 29, true),
('calledtosurf/src/assets/Clothing/Bottoms/29b.png', 29, false),
('calledtosurf/src/assets/Clothing/Bottoms/30a.png', 30, true),
('calledtosurf/src/assets/Clothing/Bottoms/30b.png', 30, false),
('calledtosurf/src/assets/Clothing/Bottoms/31a.png', 31, true),
('calledtosurf/src/assets/Clothing/Bottoms/31b.png', 31, false),
('calledtosurf/src/assets/Clothing/Bottoms/32a.png', 32, true),
('calledtosurf/src/assets/Clothing/Bottoms/32b.png', 32, false),
('calledtosurf/src/assets/Clothing/Bottoms/33a.png', 33, true),
('calledtosurf/src/assets/Clothing/Bottoms/33b.png', 33, false),
('calledtosurf/src/assets/Clothing/Bottoms/34a.png', 34, true),
('calledtosurf/src/assets/Clothing/Bottoms/34b.png', 34, false),
('calledtosurf/src/assets/Clothing/Bottoms/35a.png', 35, true),
('calledtosurf/src/assets/Clothing/Bottoms/35b.png', 35, false),
('calledtosurf/src/assets/Clothing/Bottoms/36a.png', 36, true),
('calledtosurf/src/assets/Clothing/Bottoms/36b.png', 36, false),
('calledtosurf/src/assets/Clothing/Swimwear/37a.jpg', 37, true),
('calledtosurf/src/assets/Clothing/Swimwear/37b.jpg', 37, false),
('calledtosurf/src/assets/Clothing/Swimwear/38a.jpg', 38, true),
('calledtosurf/src/assets/Clothing/Swimwear/38b.jpg', 38, false),
('calledtosurf/src/assets/Clothing/Swimwear/39a.jpg', 39, true),
('calledtosurf/src/assets/Clothing/Swimwear/39b.jpg', 39, false),
('calledtosurf/src/assets/Clothing/Swimwear/40a.jpg', 40, true),
('calledtosurf/src/assets/Clothing/Swimwear/40b.jpg', 40, false),
('calledtosurf/src/assets/Clothing/Swimwear/41a.jpg', 41, true),
('calledtosurf/src/assets/Clothing/Swimwear/41b.jpg', 41, false),
('calledtosurf/src/assets/Clothing/Swimwear/42a.jpg', 42, true),
('calledtosurf/src/assets/Clothing/Swimwear/42b.jpg', 42, false),
('calledtosurf/src/assets/Clothing/Swimwear/43a.jpg', 43, true),
('calledtosurf/src/assets/Clothing/Swimwear/43b.jpg', 43, false),
('calledtosurf/src/assets/Clothing/Swimwear/44a.jpg', 44, true),
('calledtosurf/src/assets/Clothing/Swimwear/44b.jpg', 44, false),
('calledtosurf/src/assets/Clothing/Swimwear/45a.jpg', 45, true),
('calledtosurf/src/assets/Clothing/Swimwear/45b.jpg', 45, false),
('calledtosurf/src/assets/Clothing/Swimwear/46a.jpg', 46, true),
('calledtosurf/src/assets/Clothing/Swimwear/46b.jpg', 46, false),
('calledtosurf/src/assets/Clothing/Swimwear/47a.jpg', 47, true),
('calledtosurf/src/assets/Clothing/Swimwear/47b.jpg', 47, false),
('calledtosurf/src/assets/Clothing/Swimwear/48a.jpg', 48, true),
('calledtosurf/src/assets/Clothing/Swimwear/48b.jpg', 48, false),
('calledtosurf/src/assets/Shoes/Boots/49a.jpg', 49, true),
('calledtosurf/src/assets/Shoes/Boots/49b.jpg', 49, false),
('calledtosurf/src/assets/Shoes/Boots/50a.jpg', 50, true),
('calledtosurf/src/assets/Shoes/Boots/50b.jpg', 50, false),
('calledtosurf/src/assets/Shoes/Boots/51a.jpg', 51, true),
('calledtosurf/src/assets/Shoes/Boots/51b.jpg', 51, false),
('calledtosurf/src/assets/Shoes/Boots/52a.jpg', 52, true),
('calledtosurf/src/assets/Shoes/Boots/52b.jpg', 52, false),
('calledtosurf/src/assets/Shoes/Boots/53a.jpg', 53, true),
('calledtosurf/src/assets/Shoes/Boots/53b.jpg', 53, false),
('calledtosurf/src/assets/Shoes/Boots/54a.jpg', 54, true),
('calledtosurf/src/assets/Shoes/Boots/54b.jpg', 54, false),
('calledtosurf/src/assets/Shoes/Boots/55a.jpg', 55, true),
('calledtosurf/src/assets/Shoes/Boots/55b.jpg', 55, false),
('calledtosurf/src/assets/Shoes/Boots/56a.jpg', 56, true),
('calledtosurf/src/assets/Shoes/Boots/56b.jpg', 56, false),
('calledtosurf/src/assets/Shoes/Boots/57a.jpg', 57, true),
('calledtosurf/src/assets/Shoes/Boots/57b.jpg', 57, false),
('calledtosurf/src/assets/Shoes/Boots/58a.jpg', 58, true),
('calledtosurf/src/assets/Shoes/Boots/58b.jpg', 58, false),
('calledtosurf/src/assets/Shoes/Heels/59a.jpg', 59, true),
('calledtosurf/src/assets/Shoes/Heels/59b.jpg', 59, false),
('calledtosurf/src/assets/Shoes/Heels/60a.jpg', 60, true),
('calledtosurf/src/assets/Shoes/Heels/60b.jpg', 60, false),
('calledtosurf/src/assets/Shoes/Heels/61a.jpg', 61, true),
('calledtosurf/src/assets/Shoes/Heels/61b.jpg', 61, false),
('calledtosurf/src/assets/Shoes/Heels/62a.jpg', 62, true),
('calledtosurf/src/assets/Shoes/Heels/62b.jpg', 62, false),
('calledtosurf/src/assets/Shoes/Heels/63a.jpg', 63, true),
('calledtosurf/src/assets/Shoes/Heels/63b.jpg', 63, false),
('calledtosurf/src/assets/Shoes/Heels/64a.jpg', 64, true),
('calledtosurf/src/assets/Shoes/Heels/64b.jpg', 64, false),
('calledtosurf/src/assets/Shoes/Sandals/65a.jpg', 65, true),
('calledtosurf/src/assets/Shoes/Sandals/65b.jpg', 65, false),
('calledtosurf/src/assets/Shoes/Sandals/66a.jpg', 66, true),
('calledtosurf/src/assets/Shoes/Sandals/66b.jpg', 66, false),
('calledtosurf/src/assets/Shoes/Sandals/67a.jpg', 67, true),
('calledtosurf/src/assets/Shoes/Sandals/67b.jpg', 67, false),
('calledtosurf/src/assets/Shoes/Sandals/68a.jpg', 68, true),
('calledtosurf/src/assets/Shoes/Sandals/68b.jpg', 68, false),
('calledtosurf/src/assets/Shoes/Sandals/69a.jpg', 69, true),
('calledtosurf/src/assets/Shoes/Sandals/69b.jpg', 69, false),
('calledtosurf/src/assets/Shoes/Sandals/70a.jpg', 70, true),
('calledtosurf/src/assets/Shoes/Sandals/70b.jpg', 70, false),
('calledtosurf/src/assets/Shoes/Sandals/71a.jpg', 71, true),
('calledtosurf/src/assets/Shoes/Sandals/71b.jpg', 71, false),
('calledtosurf/src/assets/Shoes/Sandals/72a.jpg', 72, true),
('calledtosurf/src/assets/Shoes/Sandals/72b.jpg', 72, false),
('calledtosurf/src/assets/Shoes/Sandals/73a.jpg', 73, true),
('calledtosurf/src/assets/Shoes/Sandals/73b.jpg', 73, false),
('calledtosurf/src/assets/Shoes/Sandals/74a.jpg', 74, true),
('calledtosurf/src/assets/Shoes/Sandals/74b.jpg', 74, false),
('calledtosurf/src/assets/Shoes/Sandals/75a.jpg', 75, true),
('calledtosurf/src/assets/Shoes/Sandals/75b.jpg', 75, false),
('calledtosurf/src/assets/Shoes/Sandals/76a.jpg', 76, true),
('calledtosurf/src/assets/Shoes/Sandals/76b.jpg', 76, false),
('calledtosurf/src/assets/Shoes/Sneakers/77a.jpg', 77, true),
('calledtosurf/src/assets/Shoes/Sneakers/77b.jpg', 77, false),
('calledtosurf/src/assets/Shoes/Sneakers/78a.jpg', 78, true),
('calledtosurf/src/assets/Shoes/Sneakers/78b.jpg', 78, false),
('calledtosurf/src/assets/Shoes/Sneakers/79a.jpg', 79, true),
('calledtosurf/src/assets/Shoes/Sneakers/79b.jpg', 79, false),
('calledtosurf/src/assets/Shoes/Sneakers/80a.jpg', 80, true),
('calledtosurf/src/assets/Shoes/Sneakers/80b.jpg', 80, false),
('calledtosurf/src/assets/Shoes/Sneakers/81a.jpg', 81, true),
('calledtosurf/src/assets/Shoes/Sneakers/81b.jpg', 81, false),
('calledtosurf/src/assets/Shoes/Sneakers/82a.jpg', 82, true),
('calledtosurf/src/assets/Shoes/Sneakers/82b.jpg', 82, false),
('calledtosurf/src/assets/Shoes/Sneakers/83a.jpg', 83, true),
('calledtosurf/src/assets/Shoes/Sneakers/83b.jpg', 83, false),
('calledtosurf/src/assets/Accessories/Hats/84a.jpg', 84, true),
('calledtosurf/src/assets/Accessories/Hats/84b.jpg', 84, false),
('calledtosurf/src/assets/Accessories/Hats/85a.jpg', 85, true),
('calledtosurf/src/assets/Accessories/Hats/85b.jpg', 85, false),
('calledtosurf/src/assets/Accessories/Hats/86a.jpg', 86, true),
('calledtosurf/src/assets/Accessories/Hats/86b.jpg', 86, false),
('calledtosurf/src/assets/Accessories/Hats/87a.jpg', 87, true),
('calledtosurf/src/assets/Accessories/Hats/87b.jpg', 87, false),
('calledtosurf/src/assets/Accessories/Hats/88a.jpg', 88, true),
('calledtosurf/src/assets/Accessories/Hats/88b.jpg', 88, false),
('calledtosurf/src/assets/Accessories/Hats/89a.jpg', 89, true),
('calledtosurf/src/assets/Accessories/Hats/89b.jpg', 89, false),
('calledtosurf/src/assets/Accessories/Hats/90a.jpg', 90, true),
('calledtosurf/src/assets/Accessories/Hats/90b.jpg', 90, false),
('calledtosurf/src/assets/Accessories/Hats/91a.jpg', 91, true),
('calledtosurf/src/assets/Accessories/Hats/91b.jpg', 91, false),
('calledtosurf/src/assets/Accessories/Hats/92a.jpg', 92, true),
('calledtosurf/src/assets/Accessories/Hats/92b.jpg', 92, false),
('calledtosurf/src/assets/Accessories/Hats/93a.jpg', 93, true),
('calledtosurf/src/assets/Accessories/Hats/93b.jpg', 93, false),
('calledtosurf/src/assets/Accessories/Hats/94a.jpg', 94, true),
('calledtosurf/src/assets/Accessories/Hats/94b.jpg', 94, false),
('calledtosurf/src/assets/Accessories/Hats/95a.jpg', 95, true),
('calledtosurf/src/assets/Accessories/Hats/95b.jpg', 95, false),
('calledtosurf/src/assets/Accessories/Jewlery/96a.jpg', 96, true),
('calledtosurf/src/assets/Accessories/Jewlery/96b.jpg', 96, false),
('calledtosurf/src/assets/Accessories/Jewlery/97a.jpg', 97, true),
('calledtosurf/src/assets/Accessories/Jewlery/97b.jpg', 97, false),
('calledtosurf/src/assets/Accessories/Jewlery/98a.jpg', 98, true),
('calledtosurf/src/assets/Accessories/Jewlery/98b.jpg', 98, false),
('calledtosurf/src/assets/Accessories/Jewlery/99a.jpg', 99, true),
('calledtosurf/src/assets/Accessories/Jewlery/99b.jpg', 99, false),
('calledtosurf/src/assets/Accessories/Jewlery/100a.jpg', 100, true),
('calledtosurf/src/assets/Accessories/Jewlery/100b.jpg', 100, false),
('calledtosurf/src/assets/Accessories/Jewlery/101a.jpg', 101, true),
('calledtosurf/src/assets/Accessories/Jewlery/101b.jpg', 101, false),
('calledtosurf/src/assets/Accessories/Jewlery/102a.jpg', 102, true),
('calledtosurf/src/assets/Accessories/Jewlery/102b.jpg', 102, false),
('calledtosurf/src/assets/Accessories/Jewlery/103a.jpg', 103, true),
('calledtosurf/src/assets/Accessories/Jewlery/103b.jpg', 103, false),
('calledtosurf/src/assets/Accessories/Jewlery/104a.jpg', 104, true),
('calledtosurf/src/assets/Accessories/Jewlery/104b.jpg', 104, false),
('calledtosurf/src/assets/Accessories/Jewlery/105a.jpg', 105, true),
('calledtosurf/src/assets/Accessories/Jewlery/105b.jpg', 105, false),
('calledtosurf/src/assets/Accessories/Jewlery/106a.jpg', 106, true),
('calledtosurf/src/assets/Accessories/Jewlery/106b.jpg', 106, false),
('calledtosurf\src\assets\Accessories\Purses\107a.jpg', 107, true),
('calledtosurf\src\assets\Accessories\Purses\107b.jpg', 107, false),
('calledtosurf\src\assets\Accessories\Purses\108a.jpg', 108, true),
('calledtosurf\src\assets\Accessories\Purses\108b.jpg', 108, false),
('calledtosurf\src\assets\Accessories\Purses\109a.jpg', 109, true),
('calledtosurf\src\assets\Accessories\Purses\109b.jpg', 109, false),
('calledtosurf\src\assets\Accessories\Purses\110a.jpg', 110, true),
('calledtosurf\src\assets\Accessories\Purses\110b.jpg', 110, false),
('calledtosurf\src\assets\Accessories\Purses\111a.jpg', 111, true),
('calledtosurf\src\assets\Accessories\Purses\111b.jpg', 111, false),
('calledtosurf\src\assets\Accessories\Purses\112a.jpg', 112, true),
('calledtosurf\src\assets\Accessories\Purses\112b.jpg', 112, false),
('calledtosurf\src\assets\Accessories\Purses\113a.jpg', 113, true),
('calledtosurf\src\assets\Accessories\Purses\113b.jpg', 113, false),
('calledtosurf\src\assets\Accessories\Purses\114a.jpg', 114, true),
('calledtosurf\src\assets\Accessories\Purses\114b.jpg', 114, false),
('calledtosurf\src\assets\Accessories\Purses\115a.jpg', 115, true),
('calledtosurf\src\assets\Accessories\Purses\115b.jpg', 115, false),
('calledtosurf\src\assets\Accessories\Purses\116a.jpg', 116, true),
('calledtosurf\src\assets\Accessories\Purses\116b.jpg', 116, false);




