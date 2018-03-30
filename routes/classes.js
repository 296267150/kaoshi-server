var express = require('express');
var router = express.Router();
var mysql=require("./mysql")

/* GET home page. */
router.get('/add', function(req, res, next) {
    var name=req.query.name;
    var fid=req.query.fid;
    mysql.query("insert into classes (name,fid) values ('"+name+"',"+fid+")",function (err,result) {
        if(result.affectedRows>0){
            res.end("ok");
        }
    })
});

router.get("/select",function (req,res) {

    mysql.query("select classes.*,fangxiang.fname from classes,fangxiang where classes.fid=fangxiang.fid",function (err,result) {

        res.end(JSON.stringify(result));
    })
})

module.exports = router;
