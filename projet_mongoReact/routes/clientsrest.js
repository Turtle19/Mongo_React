var express = require('express');
var router = express.Router();
// import controller for ressources
const controller = require('../controllers/clientsrest');

// use different method to provide REST operations
router.get('/', controller.home );
router.get( '/:clientId', controller.getClient );
router.post( '/', controller.createClient );
router.delete( '/:clientId', controller.deleteClient );

module.exports = router;
