var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS-Express and MongoDB on Heroku', name: 'Soumya Sri Mutyala' });
});

module.exports = router;