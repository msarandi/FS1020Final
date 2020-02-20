'use strict';

let express = require('express');
let path = require('path');

let router = require ('./router.js');
let db = require ('./db/db.js');


let app = express();
let session = require ('express-session');
let port = 3000;

let defaultSessionValues = require('./default-session-values');

require('dotenv').config()

app.use(express.json());

app.use(session({
  secret: 'anything',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 12000000,
  },
}));


app.use(router);
app.use(defaultSessionValues);


app.use('/src', express.static(path.join(__dirname, 'public')))


app.listen(port, function () {
  console.log(`Express server listening on port ${port}.`);
});




