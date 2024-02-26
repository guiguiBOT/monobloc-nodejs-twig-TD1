// npm init pour commencer
// Installation de nodemon pour éviter de relancer le serveur a chaque fois npm i nodemon
// npm i expres
// require d'express dans server.js
const express = require('express');
// npm i mongoose
// require de mongoose dans server.js
const mongoose = require('mongoose');
// require du fichier mainRouter.js dans server.js
const mainRouter = require('./routers/mainRouter')
// npm i dotenv
// installation de dotenv pour stocker les variables d'anvironnement dans un fichier à part .env
// require de la config contenue dans le fichier .env
require('dotenv').config();


// déclaration de la variable app qui contient toute l'application
const app = express();

// on dit à l'application qu'elle va utiliiser mainRouter
app.use(mainRouter);

// déclaration du port d'écoute de l'application, on récupère le port dans le fichier .env grace à dotenv
// et vérification du fonctionnement de l'application 
app.listen(process.env.PORT, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("connecté au serveur");
    }
})

mongoose.connect(process.env.URIBDD);
