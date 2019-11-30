'use strict';

let express = require('express');

let app = express();
let port = 3000;

app.listen(port, function () {
  console.log(`Express server listening on port ${port}.`);
});

app.get('/', function(request, response) {
  response.send('Hello, World!');
});
