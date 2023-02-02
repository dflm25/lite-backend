
const createTables = async (knex) => {
    try {
        await knex.schema.createTable('users', function (table) {
            table.increments();
            table.string('name');
            table.string('email');
            table.text('password');
            table.enu('role', ['admin', 'external'])
            table.timestamps();
            table.unique('email');
        })

        await knex.schema.createTable('companies', function (table) {
            table.string('nit', 15);
            table.string('name', 85);
            table.string('phone', 15);
            table.string('address', 255);
            table.timestamps();
            
            table.primary('nit');
            table.unique('nit');
        })
    } catch (err) {
        console.error(`Failed to create 'votes' table:`, err);
        if (knex) {
            // knex.destroy();
        }
    }
}

export default createTables;