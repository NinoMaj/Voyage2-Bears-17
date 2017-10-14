const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// Middleware to inercept request. If we authenticate user we won't create cookie session
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false, failWithError: true });


module.exports = function(app) {
  app.get('/saved-jobs', requireAuth, (req, res) => {
    res.send({ message: 'Welcome to Saved Jobs page.' });
  });
  app.post('/signin', requireSignin, Authentication.signin, Authentication.signinError);
  app.post('/signup', Authentication.signup);
};
