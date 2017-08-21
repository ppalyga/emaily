//Podstawowe importy: express, mongoose, plik z kluczami konfiguracyjnymi, model użytkownika (musi być zaimportowany pierwszy, bo jest użyty w passport.js), passport.
const express = require('express'),
  mongoose = require('mongoose'),
  keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//Połączenie z bazą danych.
mongoose.connect(keys.mongoURI);

//Stworzenie instncji aplikacji, import routów z zewnętrznego pliku.
app = express();
require('./routes/authRoutes')(app);

//Route główny. 
app.get('/', (req, res) => {
  res.send('This is the homepage.');
});

//Nasłuchiwanie portu.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
