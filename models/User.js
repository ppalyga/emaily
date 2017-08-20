const mongoose = require('mongoose');
const { Schema } = mongoose;

//Tworzymy schemat nowej kolekcji podając typy danych.
const userSchema = new Schema({
  googleId: String
});
//Tworzymy kolekcję używając utworzonego wczesniej schematu.
mongoose.model('users', userSchema);

