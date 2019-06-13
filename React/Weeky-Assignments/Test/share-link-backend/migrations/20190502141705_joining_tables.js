
exports.up = function(knex, Promise) {
    return knex.schema.createTable('links_tags', (table)=>{
        table.increments();
        table.integer('link_id').unsigned();
        table.foreign('link_id').references('links.id');
        table.integer('tag_id').unsigned();
        table.foreign('tag_id').references('tags.id');
        table.timestamps(false, true);
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('links_tags')
};
