'use strict';

let express = require('express');


let db = require('./db/db');



let router = express.Router();

// Routes go under here

function validateUserMiddleware(request, response, next) {
  let user = request.body;
  if (!user.name) {
    response.status(400).send('"name" is a required field');
  } else if (!user.email) {
    response.status(400).send('"email" is a required field');
  } else if (!user.number) {
    response.status(400).send('"number" is a required field"')
  }
  else {
    next();
  }
}



// Add user to DB and send status code
router.post('/register/user', validateUserMiddleware, async function (request, response, next) {

try {
  JSON.parse('{"a": "1", "b":"2"}');
await db.addUser(request.body);
  response.sendStatus(201);
 next();
} catch (error) {
  next(error);
}
});



module.exports = router;
