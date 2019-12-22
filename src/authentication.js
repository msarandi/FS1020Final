'use strict';

/**
 *
 */
module.exports = function authenticationMiddleware(req, res, next) {
  if (!req.session.username) {
    res
    .sendStatus(correctHttpCode)
  } else {
    next();
  }
};
