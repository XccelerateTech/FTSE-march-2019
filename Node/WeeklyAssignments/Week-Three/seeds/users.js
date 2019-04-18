
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'sam', password: '123456'},
        {id: 2, username: 'test', password: 'test'},
        {id: 3, username: 'admin', password: 'admin'}
      ]);
    });

    
};
