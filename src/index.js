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



app.post ('/', function (request, response) {
  response.send('Hello World!');
});

app.post ('/user/:id', function (request, response) {
  response.send(request.params.id);
});


app.get ('/submissions', function (request, response) {
  response.send ('All Submissions');

});


