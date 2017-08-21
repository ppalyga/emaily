//Podstawowe importy: express, mongoose, plik z kluczami konfiguracyjnymi, model użytkownika (musi być zaimportowany pierwszy, bo jest użyty w passport.js), passport.
const express = require('express'),
  mongoose = require('mongoose'),
  cookieSession = require('cookie-session'),
  passport = require('passport'),
  keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//Połączenie z bazą danych.
mongoose.connect(keys.mongoURI);

//Stworzenie instncji aplikacji.
app = express();

//Konfiguracja ciasteczek dla sesji.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Import routów z zewnętrznego pliku (po konfiguracji ciaseczek).
require('./routes/authRoutes')(app);

//Route główny.
app.get('/', (req, res) => {
  res.send('This is the homepage.');
});

//Nasłuchiwanie portu.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
