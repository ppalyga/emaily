Emaily - system ankietowy z płatnościami oparty na NodeJS, MongoDB i React

Lista zależności:
*express


npm install express --save

Struktura plików:
index.js

Checklista deployrmentu:
*dynamiczne bindowanie portu - dodanie linijek w index.js:
    const PORT = process.env.PORT || 5000;
    app.listen(PORT);
*wyszczególnienie wersji Node do użycia przez Heroku - dodanie linijek w package.json:
    "engines": {
        "node": "8.1.1",
        "npm": "5.0.3"
    }
*dodanie instrukcji startu serwera dla Heroku w package.json:
    "scripts": {
        "start": "node index.js"
    }
*utworzenie pliku .gitignore z wykluczeniem modułów Node