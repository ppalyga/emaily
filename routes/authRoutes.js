// Podstawowe importy
const passport = require('passport');

//Przekazanie aplikacji jako argumentu dla routów.
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
