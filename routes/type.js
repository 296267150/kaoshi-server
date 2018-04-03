var express = require('express');
var router = express.Router();
var mysql=require("./mysql")

/* GET home page. */
router.get('/addType', function(req, res, next) {
   var typename=(req.query.typename);
   mysql.query("insert into type (typename) values ('"+typename+"')",function (err,result) {
       if(err){
         res.end("err")
       }else{
         if(result.affectedRows>0){
           res.end("ok");
         }else{
           res.end("err");
         }
       }
   })
});

router.get("/select",function (req,res) {

    mysql.query("select * from type",function (err,result) {
      res.end(JSON.stringify(result));
    })

})

module.exports = router;
