//Require to sposób importowania zależności zwany CommonJS modules. Stała app tworzy nową instację palikacji express. W większości projektów używa się tylko jednej aplikacji.
const express = require("express");
const app = express();

//Podstawowy routing ścieżki głównej.
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//Nasłuchiwanie portu dynamicznie przydzielonego przez Heroku lub 5000 na teście.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
