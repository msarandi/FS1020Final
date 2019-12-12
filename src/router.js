'use strict';

let express = require('express');
let db = require('./db');

let router = express.Router();

// Routes go under here

// Add car to DB and send status code

// Alternative using `promise.then`
// router.post('/car', async function (req, res) {
//   db.addCar(req.body).then(function () {
//     res.sendStatus(201);
//   });
// });

module.exports = router;
