const { fetch, fetchAll } = require("../../lib/postgres");

const ORDERS = `select * from orders`;
const NEW_ORDER = `insert into orders(user_name, order_address, user_phone) values($1, $2, $3) returning *`;

const orders = () => fetchAll(ORDERS);
const newOrder = (name, address, phone) => fetch(NEW_ORDER, name, address, phone);

module.exports = {
  orders,
  newOrder,
};
