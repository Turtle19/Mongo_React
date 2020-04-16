const Clients = require('../models/clients').model;

// controller for GET /
  const home =
     (req,res) =>
           Clients.find()
                  .then( allClients  => res.status(200).json(allClients));

// controller for GET /: clientId
const getClient =
    (req, res) =>
       Clients.findById( req.params.clientId )
              .then( client => res.status(200).json(client) );

// controller for POST
const createClient =
      (req, res) => {
        let newClient =
        {
          name : req.body.name,
          gaz : req.body.gaz,
          eau : req.body.eau,
          electricite : req.body.electricite
        };
        Clients.create(newClient)
               .then( client => res.status(200).json(client) );
      }

// controller for DELETE/:clientId
const deleteClient =
  (req,res) =>
      Clients.findByIdAndRemove( req.params.clientId )
           .then( client => res.status(200).json(client));

module.exports.home = home;
module.exports.getClient = getClient;
module.exports.createClient = createClient;
module.exports.deleteClient = deleteClient;
