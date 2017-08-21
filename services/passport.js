//Podstawowe importy: passport, strategia, mongoose, klucze konfiguracyjne i model użytkownika.
const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  mongoose = require('mongoose'),
  keys = require('../config/keys'),
  User = mongoose.model('users');

//Stworzenie tokenu dla ciasteczka na podstawie niżej pobranego użytkownika z bazy danych.
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//Identyfikacja użytkownika na podstawie tokenu w ciasteczku.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//Konfiguracja passporta - clientID i clientSecret z Google+ API, ścieżka do przekierowania po pozytywnej autentykacji, sprawdzenie czy użytkownik istnieje w bazie danych, a jeśli nie - utworzenie go.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
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
