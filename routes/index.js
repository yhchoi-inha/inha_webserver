var express = require('express');
var router = express.Router();

/* page :: Main */
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕하세요', pageName:'home.ejs' });
});

module.exports = router;