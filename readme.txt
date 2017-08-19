Emaily - system ankietowy z płatnościami oparty na NodeJS, MongoDB i React

Lista zależności:
*express


npm install express --save

Struktura plików:
index.js

1.Checklista deploymentu:
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

2.GIT:
Instalujemy GITa. Podstawowe komendy:

*git add . - dodaje wszystko do stagingu
*git status - status stagingu
*git commit -m "tutaj wpisujemy nazwę commitu"
*git remote add {heroku} {url} - dodanie zewnętrznego repozytorium do synchronizacji
*git push {heroku} master - synchronizacja z gałęzią master zewnętrznego repozytorium

3.Heroku:
Instalujemy Heroku CLI. Podstawowe komendy:

*heroku login
*heroku create - tworzenie nowej aplikacji
*heroku open - otwarcie bierzącej aplikacji