
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Ben', email: 'ben@b.com' },
        {id: 2, name: 'Matt', email: 'matt@m.com' },
        {id: 3, name: 'John', email: 'john@j.com' },
        {id: 4, name: 'Alice', email: 'alice@a.com' },
        {id: 5, name: 'Emma', email: 'emma@e.com' },
        {id: 6, name: 'Jenna', email: 'jenna@j.com' },
      ]); 
    });
};
