
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('transactions', (table)=>{
    table.integer('card_id').unsigned();
    table.foreign('card_id').references('credit_cards.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('transactions', (table)=>{
    table.dropColumn('card_id');
  })
};
