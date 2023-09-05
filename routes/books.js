var express = require('express');
var router = express.Router();

/* page :: books manage */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서관리', name : "홍길동" });
});

module.exports = router;
