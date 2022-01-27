const { fetch, fetchAll } = require("../../lib/postgres");

const CATEGORY = `select * from category`;

const category = () => fetchAll(CATEGORY);

module.exports = {
  category,
};
