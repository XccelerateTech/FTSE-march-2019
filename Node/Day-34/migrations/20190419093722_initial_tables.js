exports.up = function(knex, Promise) {
    return knex.schema.createTable('accounts', (table)=>{
        table.increments();
        table.string('name');
        table.string('email');
        table.string('HKID')
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts')
};
