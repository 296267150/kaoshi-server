var express = require('express');
var router = express.Router();
var multer  = require('multer')
var md5=require("./md5")
var mysql=require("./mysql");
var xlsx=require("node-xlsx");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname  )
    }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/signStu', function(req, res, next) {
    var name=req.query.name;
    var cid=req.query.cid;
    var pass=md5("123456");
    mysql.query(`insert into stu (name,pass,cid) values ('${name}','${pass}',${cid})`,function (err,result) {
        if(result.affectedRows>0){
            res.end("ok")
        }else{
            res.end("err");
        }
    })
});

router.post("/upload",upload.single("aa"),function (req,res) {
    var datas=(xlsx.parse(req.file.path))[0].data;

    for(var i=0;i<datas.length;i++){
        console.log(datas[i]);
    }
    
})

module.exports = router;
