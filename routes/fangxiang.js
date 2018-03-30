var express = require('express');
var router = express.Router();
var mysql=require("./mysql");

/* GET home page. */
router.get('/addFangxiang', function(req, res, next) {
    var fname=req.query.fname;
    mysql.query("insert into fangxiang (fname) values ('"+fname+"')",function (err,result) {
        if(err){
            res.end("err")
        }else {
            if (result.affectedRows > 0) {
                res.end("ok")
            } else {
                res.end("err")
            }
        }
    })

});

router.get("/select",function (req,res) {
    mysql.query("select * from fangxiang",function (err,result) {
        res.end(JSON.stringify(result));

    })
})
router.get("/del/:fid",function (req,res) {
    var fid=req.params.fid;
    mysql.query("delete from fangxiang where fid="+fid,function (err,result) {
        if(result.affectedRows>0){
            res.end("ok")
        }
    })
})

router.get("/editSelect/:fid",function (req,res) {

    var fid=req.params.fid;
    mysql.query("select * from fangxiang where fid="+fid,function (err,result) {

        res.end(JSON.stringify(result[0]));
    })
})

router.get("/editCon",function (req,res) {
    var fid=req.query.fid;
    var fname=req.query.fname;

    var sql="update fangxiang set fname='"+fname+"' where fid="+fid;
    console.log(sql);
    mysql.query(sql,function (err,result) {

        if(result.affectedRows>0) {
            res.end("ok");
        }else{
            res.end("err");
        }
    })

})

module.exports = router;
