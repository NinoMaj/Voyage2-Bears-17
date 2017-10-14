const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  return res.send({ token: tokenForUser(req.user) });
};

exports.signinError = (err, req, res, next) => {
  return res.status(422).send({ error: 'Signin failed: Bad Email or Password.' });
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // See if a user with the given email exists
  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err); }

    if (existingUser) {
    // If a user with email does exists, return an error
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exists, create and save user record
    const user = new User({
      email,
      password,
    });

    user.save((error) => {
      if (error) { return next(error); }

       // Respond to request indicating the user was created
      return res.json({ token: tokenForUser(user) });
    });
  });
};
