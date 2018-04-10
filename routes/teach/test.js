var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

/* GET home page. */
router.get('/select', function(req, res, next) {
  var fid=req.query.fid;
  var tid=req.query.tid;

  mysql.query(`select * from test where fid=${fid} and typeid=${tid}`,function (err,result) {

      console.log(result);
      res.end(JSON.stringify(result))
  })
});

module.exports = router;
