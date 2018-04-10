var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

/* GET home page. */
router.get('/login', function(req, res, next) {
  var uname=req.query.name;
  var upass=md5(req.query.pass);

  var sql=`select * from teach where name='${uname}' and pass='${upass}'`;
  mysql.query(sql,function (err,result) {
      if(err){
          var obj={message:"err"};
          res.end(JSON.stringify(obj))
      }else{
          if(result.length>0){
              var obj={message:"yes",id:result[0].id,name:uname};
              res.end(JSON.stringify(obj))
          }else{
              var obj={message:"err"};
              res.end(JSON.stringify(obj))
          }
      }
  })
});

router.get("/editpass",function (req,res) {
    var id=req.query.id;
    var pass1=req.query.pass1;
    var pass2=md5(req.query.pass2);

    mysql.query("select * from teach where id="+id,function (err,result) {

        if(result[0].pass==md5(pass1)){

            mysql.query(`update teach set pass="${pass2}" where id=${id}`,function (err,result) {

                res.end("ok");
            })

        }else{

            res.end("原始密码不对");
        }

    })
})

module.exports = router;
