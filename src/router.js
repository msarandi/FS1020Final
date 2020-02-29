'use strict';

let express = require('express');
let app = express();
let db = require('./db/db');
let router = express.Router();
let cors = require('cors')
/*let authentication = require('./authentication');*/
let path = require ('path');


// Routes

router.use(cors())

router.post('/contact.html',validateContactSubmissions,function(request, response, next) {
  let contact = request.body;
  db.addContact({...contact});
  response.status(201).send(contact);
})



// Create an entry when the user submits their form
app.get ('/contact.html', cors(), function (request, response) {
  response.send('it works');
});

// Create or register a user
app.post ('/register/user', async function (request, response) {
  response.json(await db.addUser());
});

/* app.use(express.urlencoded({ extended: false }));*/

//Route to log a registered user in to create a session
app.post ('/register/session', function (request, response) {
  response.send('Log In');
});

//Route to get a listing of all submissions
app.get ('/allcontacts', async function (request, response) {
  response.json(await db.read());

});

//Info required to create user
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

/*router.post('/register/user', validateUserMiddleware, async function (request, response, next) {

try {
  JSON.parse('{"a": "1", "b":"2", "c":"3"}');
await db.addUser(request.body);
  response.sendStatus(201);
 next();
} catch (error) {
  next(error);
}
});*/


/*router.use(authentication);
router.get('/allcontacts', authentication, async function (request, response) {
  response.json(await db.read());
});*/


/*function postLoginRoute(req, res) {
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
}*/


function validateContactSubmissions(request, response, next) {
  let contact = request.body;
  let errors = [];
  if (!contact.firstName) {
    errors.push('firstName');
  }

  if (!contact.lastName) {
    errors.push('lastName')
  }

  if (!contact.email) {
    errors.push('email');
  }

  if (errors.length > 0) {
    return response.status(400).send({
      "message": "fields not found",
      "fields" : errors
    })
  }
  next();
}

/*module.exports = {
  post: postLoginRoute,
};*/


module.exports = router;
