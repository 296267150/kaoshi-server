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

router.get("/tis",function (req,res) {

    var tis=req.query.tis;
    mysql.query("select * from test where id in ("+tis+") order by field (id,"+tis+")",function (err,result) {
        res.end(JSON.stringify(result));
    })
})

router.get("/tied",function (req,res) {
    var teachid=req.query.teachid;
    mysql.query("select zuti.end,teach.name as tname ,zuti.id as zid from zuti,teach where teachid="+teachid+" and zuti.teachid=teach.id",function (err,result) {
       var arr=[];
       var nowtime=new Date().getTime();
       for(var i=0;i<result.length;i++){
           var endtime=new Date(result[i].end).getTime();
           if(nowtime>endtime){
               arr.push(result[i]);
           }
       }

      res.end(JSON.stringify(arr));

    })
})

router.get("/tiedStue",function (req,res) {
    var zid=req.query.zid;
    var sql="select result.id as rid,stu.id as sid,stu.name as sname from result,stu where zid="+zid+" and result.sid=stu.id";
    console.log(sql);
    mysql.query(sql,function (err,result) {

        res.end(JSON.stringify(result))
    })
})

router.get("/update",function (req,res) {

    console.log(111);
    var rid=req.query.rid;
    var jiandaScore=req.query.jiandaScore;
    var sql=`update result set jiandaScore='${jiandaScore}' where id=${rid}`;
    console.log(sql);
    mysql.query(sql,function (err,result) {
        if(result.affectedRows>0){
            res.end("ok");
        }
    })
})

module.exports = router;
