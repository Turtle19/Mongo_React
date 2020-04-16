const mongoose = require('mongoose');

/* definition of schema for ressources*/
const ressourcesSchema = new mongoose.Schema({
  ressources :  {type : String, required : true },
  price : {type : Number, required : true }
});

// export the schema
module.exports = ressourcesSchema;
const dbConnection = require('../controllers/db');
const Ressources = dbConnection.model('Ressource',ressourcesSchema,'ressources');

// export the model
module.exports.model = Ressources;
