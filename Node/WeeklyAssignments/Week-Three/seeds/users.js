
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'sam', password: '123456'},
        { username: 'test', password: 'test'},
        { username: 'hhh', password: 'thhhest'},
        {username: 'admin', password: 'admin'}
      ]);
    });

    
};
