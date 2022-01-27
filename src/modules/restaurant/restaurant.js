const { restaurant, newRestaurant, allRestaurant, deleteRestaurant } = require("./model");

module.exports = {
  RESTAURANTS: async (req, res) => {
    try {
      const { categoryID } = req.params;

      const allRestaurants = await restaurant(categoryID);

      res.send(allRestaurants);
    } catch (err) {
      console.log(err.message);
    }
  },
  NEW_RESTAURANT: async (req, res) => {
    try {
      const { name, categoryID } = req.body;

      const newRestaurants = await newRestaurant(name, categoryID);

      res.send(newRestaurants);
    } catch (err) {
      console.log(err.message);
    }
  },
  ALL_RESTAURANTS: async (req, res) => {
    try {
      const allRestaurants = await allRestaurant();

      res.send(allRestaurants);
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE_RESTAURANT: async (req, res) => {
    try {
      const { restaurantId } = req.body;

      const deletedRestaurant = await deleteRestaurant(restaurantId);

      res.send("deleted");
    } catch (err) {
      console.log(err.message);
    }
  },
};
