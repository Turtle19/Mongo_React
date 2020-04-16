const Ressources = require('../models/ressources').model;

// define an REST like API
// controller for GET /
//const home = (req, res) => res.render('ressourcesrest.ejs');
  const listRessources =
     (req,res) =>
           Ressources.find()
                     .then(allRessources => res.status(200).json(allRessources) );

// controller for GET /: ressourceId
const getRessourceByID =
  (req, res) =>
     Ressources.findById( req.params.ressourceId )
               .then( ressource => res.status(200).json(ressource) );

// controller for PUT /: ressourceId
const updateCoutRessource =
  (req, res) => {
    let updatedRessource = { ...req.body };//price : req.body.price
    Ressources.findByIdAndUpdate( req.params.ressourceId, updatedRessource, { new : true } )
         .then( ressource => res.status(200).json(ressource) );
  }

module.exports.listRessources = listRessources;
module.exports.getRessourceByID = getRessourceByID;
module.exports.updateCoutRessource = updateCoutRessource;
