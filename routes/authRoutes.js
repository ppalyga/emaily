const passport = require('passport');

module.exports = app => {
  // Route dla pierwotnej autoryzacji ze wskazaniem informacji których potrzebujmey i route callback.
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

