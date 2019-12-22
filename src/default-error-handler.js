'use strict';

app.use(function (error, req, res, next) {
  console.error(error);
  res.sendStatus(500);
});


