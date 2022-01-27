const { Pool } = require("pg");
const { connectionElString } = require("../config");

const pool = new Pool({
  connectionString: "postgres://postgres:1111@localhost:5432/exam",
});

const fetch = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, params.length ? params : null);
    return row;
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
};

const fetchAll = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params.length ? params : null);
    return rows;
  } finally {
    client.release();
  }
};

module.exports = {
  fetch,
  fetchAll,
};
