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
  } else {
    next();
  }
}

router.post('/register/user', validateUserMiddleware, async function (request, response, next) {


// Add user to DB and send status code
try {
  JSON.parse('{a:1}');
await db.addUser(req.body);
  res.sendStatus(201);
next();
} catch (error) {
  next(error);
}

});



module.exports = router;
