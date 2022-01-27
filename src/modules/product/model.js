const { fetch, fetchAll } = require("../../lib/postgres");

const PRODUCTS = `select * from product where restaurant_id = $1`;
const NEW_PRODUCT = `
     insert into
          product(product_name, product_price, category_id, restaurant_id, product_img)
     values($1, $2, $3, $4, $5)
          returning * 
`;

const ALL_PRODUCTS = `
    select
      *
    from
      product p
    inner join 
      restaurant r
    on
      p.restaurant_id = r.restaurant_id
    inner join
      category c
    on
      p.category_id = c.category_id
    order by product_id ASC
`;

const DELETE_PRODUCTS = `delete from product where product_id = $1`;

const products = restaurantID => fetchAll(PRODUCTS, restaurantID);
const newProduct = (name, price, categoryID, restaurantID, img) =>
  fetch(NEW_PRODUCT, name, price, categoryID, restaurantID, img);
const allProucts = () => fetchAll(ALL_PRODUCTS);
const deleteProduct = productId => fetch(DELETE_PRODUCTS, productId);

module.exports = {
  products,
  newProduct,
  allProucts,
  deleteProduct,
};
