const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// Middleware to inercept request. If we authenticate user we won't create cookie session
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send('Welcome to homepage');
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
