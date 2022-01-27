const { fetch, fetchAll } = require("../../lib/postgres");

const CARTS = `
     select 
          *
     from 
          cart c
     inner join
          product p
     on
          c.product_id = p.product_id
     where 
          user_id = $1
`;

const NEW_CARTS = `

`;

const carts = userId => fetchAll(CARTS, userId);

module.exports = {
  carts,
};
