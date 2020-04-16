var express = require('express');
var router = express.Router();
// import controller for ressources
const controller = require('../controllers/ressourcesrest');

// use different method to provide REST operations
router.get('/', controller.listRessources);
router.get( '/:ressourceId', controller.getRessourceByID );
router.put( '/:ressourceId', controller.updateCoutRessource );

module.exports = router;
