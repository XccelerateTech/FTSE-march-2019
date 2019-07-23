const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

let query = knex.insert({
    username: "trim",
    password: "pubes"
}).into('users').returning('users.id')

query.then((rows)=>{
    console.log(rows)
})