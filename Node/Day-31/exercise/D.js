const pg = require('pg');


// connect to postgres through nodejs
const config = {
    user: 'postgres',
    database: 'fruits',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new pg.Client(config);

client.connect();

// client.query('SELECT * FROM citrus', function(err, results) {
//     if(err) {
//         console.log(err);
//     }
//     console.log(results.rows);
// })

// //=========d==================

// function getQuery(query){
//     client.query(`${query}`, function(err, results){
//     if(err){
//         console.log(err)
//     } 
//     console.log(results.rows)
// })
// }


// getQuery(`SELECT * FROM citrus WHERE color = 'yellow'; DROP TABLE example;`)

// client.query(`SELECT * FROM citrus WHERE color = 'yellow';`, function(err, results){
//     if(err){
//         console.log(err)
//     } 
//     console.log(results.rows)
// })

// ============d================ async Await


// async function run(){

//     try {
//         await client.connect();
//         let results = await client.query('SELECT * FROM citrus WHERE color = $1',['orange']);
//         console.log(results.rows);
//         return results;
//     }catch(e){
//         console.log(e);
//     }
// }


// run();

function getFruit(fruit, color){
    var client = new pg.Client('postgres://postgres:postgres@localhost:5432/fruits');

    client.connect();
    var query = 'SELECT * FROM citrus WHERE name = $1 OR color = $2;';

    client.query(query, [fruit, color], function(err, results) {
        if(err) {
            console.log(err);
        }

        console.log(results.rows);
    });
}

getFruit('grapefruit', 'DROP TABLE example;')



