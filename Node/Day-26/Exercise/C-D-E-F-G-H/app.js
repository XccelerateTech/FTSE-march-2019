var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies);

  res.cookie('name', 'tobi', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14), httpOnly: true });
  res.end('Hello World')
})

app.listen(8080)