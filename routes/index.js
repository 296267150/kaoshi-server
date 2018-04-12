var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('admin');
});
router.get('/stu', function(req, res, next) {
    res.render('stu');
});
router.get('/teach', function(req, res, next) {
    res.render('teach');
});

module.exports = router;
