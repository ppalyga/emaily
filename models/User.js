//Podstawowe importy - mongoose i schema mongoose.
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Stworzenie modelu użytkownika.
const userSchema = new Schema({
  googleId: String
});

//Stworzenie kolekcji users na podstawie modelu użytkownika.
mongoose.model('users', userSchema);
