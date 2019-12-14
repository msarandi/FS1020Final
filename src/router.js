'use strict';

let express = require('express');


let db = require('./db/db');



let router = express.Router();

// Routes go under here

function validateUserMiddleware (request, response, next) {
  let user = req.body;
  if (!user.name) {
    res.status(400).send('"Username" is a required field');
  } else if (!user.pass) {
    res.status(400).send('"Password" is a required field');
  } else {
    next();
  }
}

router.post('/register/user/new', validateUserMiddleware, async function (request, response, next) {


// Add user to DB and send status code

await db.addUser(req.body);
  res.sendStatus(201);
next();
});



module.exports = router;
