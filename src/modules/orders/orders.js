const { orders, newOrder } = require("./model");

module.exports = {
  ORDERS: async (req, res) => {
    try {
      const allOrders = await orders();
      res.send(allOrders);
    } catch (err) {
      console.log(err.message);
    }
  },
  NEW_ORDER: async (req, res) => {
    try {
      const { name, address, phone } = req.body;

      const NewOrder = await newOrder(name, address, phone);

      res.send(NewOrder);
    } catch (err) {
      console.log(err.message);
    }
  },
};
