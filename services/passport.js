//Importy dla autentykacji - passport, strategia autentykacji i klucze.
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

//Serializacja i deserializacja użytkownika pozwala na identyfikację podczas trwania sesji bez ponownego łączenia się z bazą danych. User.id to skrót dla id z Mongo.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
//Wskazanie strategii dla Passporta, podanie kluczy Google i adresu do przekierowania po udzieleniu pozwolenia. W funkcji callback jeśli user istnieje w bazie przekazujemy do done null jako brak błędów i tego usera. Then to Promise, bo zapisy w bazie danych są asynchroniczne.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (exisitngUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

