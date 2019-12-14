'use strict';

let express = require('express');
let router = require ('./router');

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




app.post ('/entry/new', function (request, response) {
  response.send('Hello World!');
});

app.post ('/register/user/new', function (request, response) {
  response.send('New User');
});


app.post ('/register/session/new', function (request, response) {
  response.send('New Session');
});

app.get ('/register/all', function (request, response) {
  response.send ('All Submissions');

});
