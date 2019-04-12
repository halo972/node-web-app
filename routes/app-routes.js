const express = require('express');
const router = express.Router();


//Importation du module de connexion à la bd
const dbConnection = require('../modules/db-connection');

router.get('/produit/list', (req, res)=>{
   const sql = 'SELECT * FROM produits';
   dbConnection.query(
      sql, 
      (err, rows) =>{
         if(err){
            res.json({error: err});
         } else {
            const params = {
               pageTitle: 'Liste des produits',
               numberOfProducts: rows.length,
               productList: rows
            }
            res.render('test', params);
         }
   });
});

router.get('/produit/form', (req,res)=>{
   res.render('form');
});

router.post('/produit/form', (req,res)=> {
   const sql = "INSERT INTO produits SET ?";
   const insertData = {
      designation: req.body.designation,
      prix: req.body.prix,
      qte_stockee: req.body.qte_stockee
   };

   dbConnection.query(
      sql,
      insertData,
      (err) =>{
         if(err) throw error;
         res.redirect('/produit/list');
      }
   )
});


module.exports = router;