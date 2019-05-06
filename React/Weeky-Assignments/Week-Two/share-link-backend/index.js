const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const LinkService = require('./Service/LinkService.js');
const LinkRouter = require('./Router/LinkRouter');
const TagService = require('./Service/TagService');
const TagRouter = require('./Router/TagRouter');

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let linkService = new LinkService(knex);
let tagService = new TagService(knex);

app.use('/api/link/', (new LinkRouter(linkService)).router());
app.use('/api/tag/', (new TagRouter(tagService)).router());

app.listen(8080, ()=>{
    console.log(`Application listening to port 8080`)
})
