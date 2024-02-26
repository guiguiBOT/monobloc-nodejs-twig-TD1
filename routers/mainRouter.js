// require pour utiliser express dans le code de mainRouter
const mainRouter = require('express').Router();
// require pour utiliser le mainModel dans le code ici
const mainModel = require('../models/mainModel');
// on installe twig npm i twig

// Déclaration d'une route avec la methode get exercice 1 du TD1
// mainRouter.get('/', (req, res)=>{
//     try {
//         res.render('presentation.twig', {
//             nom: "Beyrouth",
//             age: 46
//         })
//     } catch (error) {
//         res.send(error);
//     }
// })

// Exercice 2 du TD1
// Déclaration d'une autre route pour afficher une string dans filtres.twig
mainRouter.get('/', (req, res)=>{
    try {
        res.render('filtres.twig', {
            texte1: "Bienvenue sur ce site de l'enfer",
            texte2: "Bienvenue sur ce site de l'enfer",
            texte3: "Bienvenue sur ce site de l'enfer",
            texte4: "",
            maDate: new Date()
        })
    } catch (error) {
        res.send(error);
    }
})

// on exporte mainRouter
module.exports = mainRouter;
