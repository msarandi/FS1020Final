'use strict';

let express = require('express');
let path = require('path');

let router = require ('./router');
let db = require ('./db/db.js');

let app = express();
let port = 3000;


app.use(express.json());
app.use(router);


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
