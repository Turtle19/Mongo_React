const mongoose = require('mongoose');

/* definition of schema for clients*/
const clientSchema = new mongoose.Schema({
  name :  {type : String, required : true},
  gaz : [Number],
  eau :[Number],
  electricite : [Number]
});
// export the schema
module.exports = clientSchema;
const dbConnection = require('../controllers/db');
const Clients = dbConnection.model('Clients',clientSchema,'clients');

// export the model
module.exports.model = Clients;
