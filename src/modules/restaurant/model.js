const { fetch, fetchAll } = require("../../lib/postgres");

const RESTAURANT = `SELECT * FROM restaurant WHERE category_id = $1;`;

const NEW_RESTAURANT = `
     insert into
          restaurant(restaurant_name, category_id)
     values($1, $2)
          returning *
`;

const ALL_RESTAURANT = `
     select 
          * 
     from 
          restaurant r 
     inner join 
          category c 
     on 
          r.category_id = c.category_id 
`;

const DELETE_RESTAURANT = `delete from restaurant where restaurant_id = $1 returning *`;

const restaurant = categoryID => fetchAll(RESTAURANT, categoryID);
const newRestaurant = (name, categoryID) => fetch(NEW_RESTAURANT, name, categoryID);
const allRestaurant = () => fetchAll(ALL_RESTAURANT);
const deleteRestaurant = restaurantId => fetch(DELETE_RESTAURANT, restaurantId);

module.exports = {
  restaurant,
  newRestaurant,
  allRestaurant,
  deleteRestaurant,
};
