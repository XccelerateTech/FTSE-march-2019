
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table)=>{
        table.increments(); // this is equal to primary key - SERIAL
        table.string('name');
        table.string('email');
        table.timestamps(false, true); //date time type (unless true first, only time stamp.)
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  
};
