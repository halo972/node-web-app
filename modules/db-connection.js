// importation du module mysql
const mysql = require('mysql');

//Initialisation de la connexion au serveur
const connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : ''
});

//Ouverture de la base de données
connection.query('USE cours');

//Exportation du module
module.exports = connection;