/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("inventories", function (table) {
    table.increments();
    // table.string("company_id").references("company_nit").inTable("companies");
    table.string("company_nit").references("nit").inTable("companies");
    table.string("sku", 85);
    table.string("product_name", 15);
    table.text("description");
    table.decimal("buy_price").notNullable();
    table.decimal("sell_price").notNullable();
    table.decimal("on_stock").notNullable();

    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("inventories");
};
