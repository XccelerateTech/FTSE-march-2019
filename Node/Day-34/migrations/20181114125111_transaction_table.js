
exports.up = function(knex, Promise) {
    return knex.schema.createTable('transactions', (table)=>{
        table.increments();
        table.integer('balance');
        table.bigInteger('creditCardNumber').unsigned();
        table.foreign('creditCardNumber').references('credit_cards.number');
        table.integer('account_id').unsigned();
        table.foreign('account_id').references('accounts.id');

        table.timestamps(false,true);
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transactions')
};
