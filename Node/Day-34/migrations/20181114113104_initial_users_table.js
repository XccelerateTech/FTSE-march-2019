
exports.up = function(knex,Promise){
    return knex.schema.createTable('users',(table)=>{
      table.increments();
      table.string("name");
      table.string("email");
      table.integer('age');
      table.timestamps(false,true);
    });
  }
  
  exports.down = function(knex,Promise){
    return knex.schema.dropTable('users');
  }

  //from examples, not need for exercise