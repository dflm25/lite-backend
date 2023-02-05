/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("companies", function (table) {
    table.string("nit", 15);
    table.string("name", 85);
    table.string("phone", 15);
    table.string("address", 255);
    table.timestamps();

    table.primary("nit");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("companies");
};
