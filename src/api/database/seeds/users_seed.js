/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("123456", salt);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      name: "Daniel Lucumi",
      email: "dflm25@gmail.com",
      password: hash,
      role: "admin",
    },
    {
      name: "Carlos Medina",
      email: "carlos@gmail.com",
      password: hash,
      role: "external",
    },
  ]);
};
