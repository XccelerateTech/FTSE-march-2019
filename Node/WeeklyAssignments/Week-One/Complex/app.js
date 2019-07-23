const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello Class, This is technically a server')
})

app.listen(8080)