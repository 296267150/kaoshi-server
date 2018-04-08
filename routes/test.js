var express = require('express');
var router = express.Router();
var mysql=require("./mysql");
/* GET home page. */
router.post('/add', function(req, res, next) {

  var fid=req.body.fid;
  var typeid=req.body.typeid;
  var title=req.body.title;
  var daan=req.body.daan;
  var options=req.body.options;

  var sql=`insert into test (fid,typeid,title,daan,options) values (?,?,?,?,?)`;

  mysql.query(sql,[fid,typeid,title,daan,options],function (err,result) {
      if(err){
        res.end("err");
      }else{
        if(result.affectedRows>0){
          res.end("ok")
        }else{
          res.end("err");
        }
      }
  })
});

module.exports = router;
