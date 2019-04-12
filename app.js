//importation des modules
const express = require('express');
const bodyParser = require('body-parser');

//Importation des fichiers de routage
const appRoutes = require('./routes/app-routes');

//Création de l'application Express
const app = express();

//Définition de l'emplacement des ressources statiques
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//Définition du dossier des vues
app.set('views', './views');

//Définition du moteur de rendu des vues
app.set('view engine', 'pug');

//Référencement des routes de l'application
app.use(appRoutes);

//lancement de l'application
app.listen(3000);