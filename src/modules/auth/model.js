const { password } = require("pg/lib/defaults");
const { fetch, fetchAll } = require("../../lib/postgres");

const USERS = `select * from users`;
const REGISTER = `insert into users(user_name, user_password, user_phone) values($1,$2,$3) returning *`;
const LOGIN = `select * from users where user_name = $1 and user_password = $2`;
const ADMIN_LOGIN = `select * from users where user_name = $1 and user_password = $2 and is_admin = true`;

const users = () => fetchAll(USERS);
const register = (name, password, phone) => fetch(REGISTER, name, password, phone);
const login = (name, password) => fetch(LOGIN, name, password);
const adminLogin = (name, password) => fetch(ADMIN_LOGIN, name, password);

module.exports = {
  users,
  register,
  login,
  adminLogin,
};
