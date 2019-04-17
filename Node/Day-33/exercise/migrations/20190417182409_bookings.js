
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookings', (table)=>{
        table.increments();
        table.string('date');
        table.string('remarks');
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookings');
};
