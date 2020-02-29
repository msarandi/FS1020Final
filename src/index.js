'use strict';

let express = require('express');
let path = require('path');
let router = require ('./router.js');
let db = require ('./db/db.js');
let app = express();
let port = 8001;


app.use(express.json());

app.use(router);

app.listen(port, function () {
  console.log(`Express server listening on port ${port}.`);
});




