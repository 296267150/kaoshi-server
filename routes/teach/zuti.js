var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

/* GET home page. */
router.get('/add', function(req, res, next) {
    var con=req.query.con;
    var cid=req.query.cid;
    var fid=req.query.fid;
    var start=req.query.start;
    var end=req.query.end;
    var teachid=req.query.teachid;

    mysql.query("insert into zuti (con,cid,fid,start,end,teachid) values (?,?,?,?,?,?)",[con,cid,fid,start,end,teachid],function (err,result) {

        if(result.affectedRows>0){
            res.end("ok");
        }
    })
});

module.exports = router;
