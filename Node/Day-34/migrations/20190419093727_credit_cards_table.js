
exports.up = function(knex, Promise) {
    return knex.schema.createTable('credit_cards', (table)=>{
        table.increments();
        table.bigInteger('number').unique();
        table.date('expiry_date');
        table.integer('account_id').unsigned();
        table.foreign('account_id').references('accounts.id');
        table.timestamps(false, true);
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('credit_cards')
};
