const { products, newProduct, allProucts, deleteProduct } = require("./model");

module.exports = {
  PRODUCTS: async (req, res) => {
    try {
      const { restaurantID } = req.params;

      const allProducts = await products(restaurantID);

      res.send(allProducts);
    } catch (err) {
      console.log(err.message);
    }
  },
  NEW_PRODUCT: async (req, res) => {
    try {
      const { name, price, categoryID, restaurantID, img } = req.body;

      const NewProduct = await newProduct(name, price, categoryID, restaurantID, img);

      res.send(NewProduct);
    } catch (err) {
      console.log(err.message);
    }
  },
  ALL_PRODUCTS: async (req, res) => {
    try {
      const allProduct = await allProucts();

      res.send(allProduct);
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE_PRODUCT: async (req, res) => {
    try {
      const { productId } = req.body;

      const foundProduct = await deleteProduct(productId);

      res.send("deleted");
    } catch (err) {
      console.log(err.message);
    }
  },
};
