/**
 * Database connect
 */
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOTS,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  pool: { min: 0, max: 10 },
});

const { attachPaginate } = require("knex-paginate");
attachPaginate();

knex
  .raw("SELECT 1")
  .then(() => {
    console.log("Mysql2 connected");
  })
  .catch((e) => {
    console.log("Mysql2 not connected");
    console.error(e);
  });

export default knex;
