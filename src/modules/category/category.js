const { category } = require("./model");

module.exports = {
  CATEGORY: async (req, res) => {
    try {
      const allCategories = await category();

      res.send(allCategories);
    } catch (err) {
      console.log(err.message);
    }
  },
};
