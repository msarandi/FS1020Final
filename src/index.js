'use strict';

let express = require('express');
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
  response.send('Hello World!');
});

app.post ('/register/user', function (request, response) {
  response.send('New User');
});


app.post ('/register/session', function (request, response) {
  response.send('New Session');
});

app.get ('/register/all', function (request, response) {
  response.send ('All Submissions');

});
