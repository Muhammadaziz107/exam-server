-- default values
-- category

insert into category(category_name) values('fast food');
insert into category(category_name) values('milliy taomlar');

-- restaurant
insert into restaurant(restaurant_name, category_id) values('EVOS', 1);
insert into restaurant(restaurant_name, category_id) values('MAX WAY', 1);
insert into restaurant(restaurant_name, category_id) values('KFC', 1);
insert into restaurant(restaurant_name, category_id) values('AFSONA', 2);
insert into restaurant(restaurant_name, category_id) values('CARAVAN', 2);
insert into restaurant(restaurant_name, category_id) values('Soy milliy taomlar', 2);

-- product
insert into product(product_name,product_price, category_id, restaurant_id, product_img) values('Burger', '15000', 1, 1, 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&w=1000&q=80');
insert into product(product_name,product_price, category_id, restaurant_id, product_img) values('Osh',  '20000',2, 2, 'https://fotouz.uz/uploads/posts/2019-04/1555593505_osh-uzbk-palov-uzbek-osh-palov-1.jpg');
insert into product(product_name,product_price, category_id, restaurant_id, product_img) values('Lavash', '25000', 1, 3, 'https://i.ytimg.com/vi/TTnIPBOnpWk/maxresdefault.jpg');
insert into product(product_name,product_price, category_id, restaurant_id, product_img) values('Norin', '40000', 2, 4, 'https://img.povar.ru/main/d1/82/b6/4b/norin-4758.jpg');
insert into product(product_name,product_price, category_id, restaurant_id, product_img) values('Fri', '10000', 1, 5, 'https://i.ytimg.com/vi/9WVfq2u2C0g/hqdefault.jpg');
insert into product(product_name,product_price, category_id, restaurant_id, product_img) values('Manti', '5000', 2, 6, 'https://canaan.travel/wp-content/uploads/2020/11/manti-na-tarelke.jpg');

-- users
insert into users(user_name, user_password, user_phone, is_admin) values('Aliyev', '1', '+998900291080', true);
insert into users(user_name, user_password, user_phone) values('John', '123', '+998900000');

-- cart
insert into cart(cart_count, product_id, user_id) values(1,21,8);
insert into cart(cart_count, product_id, user_id) values(2,22,9);
insert into cart(cart_count, product_id, user_id) values(1,23,9);
insert into cart(cart_count, product_id, user_id) values(2,23,8);

-- orders
insert into orders(user_name, order_address, user_phone) values('Aziz', 'Toshkent', '+998900291080');
insert into orders(user_name, order_address, user_phone) values('Olim', 'Toshkent Sergeli', '+998900291080');
insert into orders(user_name, order_address, user_phone) values('Sardor', 'Toshkent Chilonzor', '+998900291080');