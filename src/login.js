'use strict';

/**
 * Initial page rendering
 */
function getLoginRoute(req, res) {
  res.render('login', {
    pageId: 'login',
    title: 'Login',
    username: req.session.username,
    formError: null,
    formValues: { username: null, password: null },
  });
}


/**
 * Form submission
 */
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
  get: getLoginRoute,
  post: postLoginRoute,
};
