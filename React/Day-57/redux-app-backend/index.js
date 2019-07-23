const express = require('express')
const cors = require('cors');

const app = express();

app.get('/stocks', (req, res)=>{
    const result = [
        {
            name: 'HSBC', code: '0005.HK'
        },
        {
            name: 'HKT', code: '0008.HK'
        }
    ]

    res.json(result)
});

app.listen(8080)