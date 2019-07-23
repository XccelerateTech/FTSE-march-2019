const fs = require('fs');
const CSVReadableStream = require('csv-reader');
const pg = require('pg');

const config = {
    user: 'postgres',
    database: 'fruits',
    password: 'postgres',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMilis: 30000,
}

const client = new pg.Client(config);

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

async function commands() {
    await client.connect();

    // console.log(inputStream)

    let rows = [];

    inputStream.pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);

            console.log(rows)
        })
        .on('end', async (data) => {
            await client.query('BEGIN');
            try {
                for (let row of rows) {
                    let [action, name, quantity] = row;
                    // console.log('kk' , row[0], row[1], row[2])
                    // console.log('pp', action, name, quantity)
                    if (action === 'SELL') {
                        let result = await client.query(`
                    SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id
                    WHERE citrus.name = $1 GROUP BY quantity;
                    `, [name]);

                        // console.log(result)
                        // console.log(result.rows[0].quantity)
                        if (result.rows[0].quantity < quantity) {
                            throw new Error(`Not enough ${name} to sell!`);
                        }

                    }
                    if (action === 'BUY') {
                        let result = await client.query(`
                    UPDATE stock SET quantity = quantity + $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`You have bought ${quantity} ${name}'s!`);
                    } else {
                        let result = await client.query(`
                    UPDATE stock SET quantity = quantity - $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`${quantity} ${name} sold!`);
                    }
                    await client.query('COMMIT');

                }
            } catch (e) {
                await client.query('ROLLBACK')
                console.log(e)

            }
        });

}

commands();