var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
//   // res.render('index', { title: 'Express' });
//   // res.sendFile('')
// });

router.get('/', function(req, res, next) {
  res.sendFile('index.pug');
});

module.exports = router;
