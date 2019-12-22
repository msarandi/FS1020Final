'use strict';

let express = require('express');
let app = express();
let db = require('./db/db');
let router = express.Router();
let authentication = require('./authentication');

// Routes go under here



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
  JSON.parse('{"a": "1", "b":"2", "c":"3"}');
await db.addUser(request.body);
  response.sendStatus(201);
 next();
} catch (error) {
  next(error);
}
});


app.use(authentication);
app.get('/allcontacts', authentication, async function (request, response) {
  response.json(await db.read());
});


function postLoginRoute(req, res) {
  if (req.body.username === 'fs1020' && req.body.password === 'P@ssw0rd') {
    req.session.username = req.body.username;
    res.redirect('/');
  } else {
    res
      .status(401)
      .render('login', {
        pageId: 'login',
        title: 'Login',
        username: req.session.username,
        formError: 'Authentication failed.',
        formValues: {
          username: req.body.username || null,
          password: req.body.password || null,
        },
      });
  }
}




module.exports = {
  post: postLoginRoute,
};


module.exports = router;
