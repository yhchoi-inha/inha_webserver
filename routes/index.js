var express = require('express');
var router = express.Router();

/* page :: Main */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express testing' });
});

module.exports = router;
