let express = require('express');
let app = express();

app.use(express.static('flowershop'));

app.listen(8081,()=>
console.log(`App listening to port 8081`));