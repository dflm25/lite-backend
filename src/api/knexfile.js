const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env" });

console.log("process.env.DB_HOTS", process.env.DB_HOTS);
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOTS,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database/seeds"),
    },
  },
  staging: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOTS,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database/seeds"),
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOTS,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "database/seeds"),
    },
  },
};
