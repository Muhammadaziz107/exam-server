create database exam;

create table category(
     category_id serial primary key,
     category_name varchar(100) not null
);

create table restaurant(
     restaurant_id serial primary key,
     restaurant_name varchar(64),
     category_id int references category(category_id)
);

create table product(
     product_id serial primary key,
     product_name varchar(128) not null,
     product_price varchar(32) not null,
     category_id int references category(category_id),
     restaurant_id int references restaurant(restaurant_id) on delete cascade,
     product_img text
);

create table users(
     user_id serial primary key,
     user_name varchar(100) not null,
     user_password varchar(64) not null,
     user_phone varchar(64) not null,
     is_admin boolean default false
);

create table cart(
     cart_id serial primary key,
     cart_count int not null,
     product_id int references product(product_id),
     user_id int references users(user_id)
);

create table orders(
     order_id serial primary key,
     user_name varchar(64) not null,
     order_address varchar(128) not null,
     user_phone varchar(64) not null,
     is_confirm boolean default false
);




