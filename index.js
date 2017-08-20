//Require to sposób importowania zależności zwany CommonJS modules. Passport.js nie musimy przypisywać do zmiennej bo nie odwołujemy się niczego co jest w niej zawarte, chcemy go tylko w naszej aplikacji.
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//Połączenie z baza danych.
mongoose.connect(keys.mongoURI);
//Stała app tworzy nową instację aplikacji express. W większości projektów używa się tylko jednej aplikacji.
const app = express();
//Konfiguracja cookie-session. MaxAge podawany jest w milisekundach.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
// Konfiguracja passportu by używał ciasteczek.
app.use(passport.initialize());
app.use(passport.session());
//Import routów autentykacji.
require('./routes/authRoutes')(app);

//Nasłuchiwanie portu dynamicznie przydzielonego przez Heroku lub 5000 na teście.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
