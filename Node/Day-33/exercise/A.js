const fs = require('fs');
const csvReadableStream = require('csv-reader')

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "fruit1",
        user: "postgres",
        password: "postgres"
    }
});

const inputStream = fs.createReadStream('transaction_record.csv', 'utf-8');

async function command() {
    let rows = [];

    inputStream.pipe(csvReadableStream({ parsedNumbers: true, parseBooleans: true, trim: true }))
        .on('data', async (row) => {
            rows.push(row);
        })
        .on('end', async (data) => {

            knex.transaction(async (trx) => {
                for (let row of rows) {
                    let [action, name, quantity] = row;
                    if (action === 'SELL') {
                        let rows = await trx.select('quantity').from('stock')
                            .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
                            .where('citrus.name', name).groupBy('quantity');
                        if (rows[0].quantity < quantity) {
                            throw new Error(`Not enough ${name}'s to make the sale`);
                        }
                    }
                    if (action === 'BUY') {
                        await trx('stock')
                            .whereIn('citrus_id', function () {
                                return this.select('id')
                                    .from('citrus')
                                    .where('name', '=', name);
                            })
                            .increment('quantity', quantity);
                    } else {
                        await trx('stock')
                            .whereIn('citrus_id', function () {
                                return this.select('id')
                                    .from('citrus')
                                    .where('name', '=', name);
                            })
                            .decrement('quantity', quantity);
                    }
                }

                let knexResult = await knex.select('*').from('stock').innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                console.log(knexResult);

                let trxResult = await trx.select('*').from('stock')
                    .innerJoin('citrus', 'stock.citrus_id', 'citrus.id');
                console.log(trxResult);

            })

        })
}

command();
