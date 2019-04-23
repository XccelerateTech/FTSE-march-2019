const express = require('express');
const redis = require('redis');
const axios = require('axios');
const async = require('async');

//connect to redis server - if there is a password on your serve this is where we put it.
const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

const app = express();

//here we are getting the response from the blockchain API, once we have the information we then store each data set into redis. 
// here we use the async package to allow us to form a queue (array) of our txIndexes we need to send the request.
const readTransactionQueue = async.queue(function (txIndex, callback) {
    console.log('Fetching the transaction detail ' + txIndex);
    axios.get('https://blockchain.info/rawtx/' + txIndex)
        .then((response) => {
            //Once we get the response, we cache it.
            client.setex(txIndex, 10 * 60, JSON.stringify(response.data), (err) => {
                if (err) {
                    console.log(err);
                }
                callback();
            });
        });
}, 4);


//This is our code for getting the latest block from the API, then we grab each txIndex and push it into readTransactionsQueue so that the array is populated and you are able to grab the data for each transaction index.
function readLatestBlock() {
    console.log('checking for the latest block for updates....');
    //XMLHTTPRequest // Not available in node.

    axios.get('https://blockchain.info/latestblock')
        .then((response) => {
            response.data.txIndexes.forEach(txIndex => {
                //check if redis stored the cache
                //If not, request the has from API

                client.get(txIndex, (err, reply) => {
                    if (err) {
                        console.log(err);
                    }

                    if (reply === null) {
                        readTransactionQueue.push(txIndex);
                    } else {
                        //To extend the expiry of the transaction

                        client.expire(txIndex, 10 * 60, (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                });
            })
            client.set('latestBlock', JSON.stringify(response.data), (err) => {
                if (err) {
                    console.log(err);
                }

            });
        });

    //option 1 to fetch every minute
    setTimeout(readLatestBlock, 60 * 10000);
}

readLatestBlock();

//option 2 to fetch every minute
//setInterval(readLatestBlock, 60 * 1000);


app.get('/latestBlock', (req, res) => {
    client.get('latestBlock', (err, reply) => {
        const latestBlock = JSON.parse(reply);
        Promise.all(
            /* An array of promises. */
            latestBlock.txIndexes.map(txIndex => {
                return new Promise((resolve, reject) => {
                    client.get(txIndex, (err, reply) => {
                        const transaction = JSON.parse(reply);
                        if(transaction ==null){
                            return reject('Still fetching data. ')
                        }
                        resolve(transaction.hash);
                    });
                });
            })
        ).then((hashes) => {
            /*This is run once all of the promises are completed. */
            latestBlock.txHashes = hashes;
            res.json(latestBlock);
        }).catch(err =>{
            res.status(400).send(err);
        })
    });
});

app.listen(8080);