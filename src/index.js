'use strict';

let express = require('express');
let path = require('path');

let router = require ('./router');
let db = require ('./db/db.js');


let app = express();
let authentication = require('./authentication');
let session = require ('express-session');
let port = 3000;

let defaultSessionValues = require('./default-session-values');

require('dotenv').config()

app.use(express.json());
app.use(router);

app.use(authentication);
app.use('/static/protected', express.static(path.resolve('static/protected')));

app.listen(port, function () {
  console.log(`Express server listening on port ${port}.`);
});

app.get('/', function(request, response) {
  response.send('Hello, World!');
});




app.post ('/entry', function (request, response) {
  response.send('Thank you!');
});

app.post ('/register/user', async function (request, response) {
  response.json(await db.addUser());
});


app.post ('/register/session', function (request, response) {
  response.send('Log In');
});

app.get ('/allcontacts', async function (request, response) {
  response.json(await db.read());

});


app.use(session({
  secret: 'anything',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 12000000,
  },
}));

app.use(defaultSessionValues);

