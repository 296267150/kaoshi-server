var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

/* GET home page. */
router.get('/kaoshi', function(req, res, next) {
    var cid=req.query.cid;
    var nowtime=new Date().getTime()
    var sql="select zuti.*,teach.name as teachname from zuti,teach where zuti.cid="+cid+" and zuti.teachid=teach.id";
    console.log(sql);
    mysql.query(sql,function (err,result) {

        var arr=[];
        for(var i=0;i<result.length;i++){
            var endtime=new Date(result[i].end).getTime();
            if(endtime>nowtime){
                arr.push(result[i])
            }
        }

       res.end(JSON.stringify(arr));
    })
});

router.get("/shiti",function (req,res) {
    var zid=req.query.id;
    var sid=req.query.sid;

    /*先查考过没有*/

    mysql.query(`select * from result where zid=${zid} and sid=${sid}`,function (err2,result2) {
        if(result2.length>0){
            res.end("err")
        }else{
            mysql.query("select * from zuti where id="+zid,function (err,result) {
                var con=result[0].con.split("|");
                var tis="";
                var score=[];
                for(var i=0;i<con.length;i++){
                    var arr=con[i].split(":");
                    tis+=arr[0]+","
                    score.push(arr[1]);
                }

                tis=tis.slice(0,-1);

                mysql.query(`select * from test where id in (${tis}) order by field (id,${tis})`,function (err1,result1) {

                    for(var i=0;i<result1.length;i++){
                        result1[i].score=score[i]
                        result1[i].options=result1[i].options.split("|");
                        result1[i].info=[];
                    }
                    res.end(JSON.stringify(result1));
                })


            })
        }
    })




})

router.get("/result",function (req,res) {
    var zid=req.query.zid;
    var sid=req.query.sid;
    var cid=req.query.cid;
    var selectSuccess=req.query.selectSuccess;
    var selectErr=req.query.selectErr;
    var jianda=req.query.jianda;
    var jiandaScore=req.query.jiandaScore;
    var status=req.query.status;

    var sql="insert into result (zid,sid,cid,selectSuccess,selectErr,jianda,jiandaScore,status) values (?,?,?,?,?,?,?,?)";
    console.log(sql);
    mysql.query(sql,[zid,sid,cid,selectSuccess,selectErr,jianda,jiandaScore,status],function (err,result) {
        if(result.affectedRows>0){
            res.end("ok");
        }
    })
})

router.get("/check",function (req,res) {
    var zid=req.query.zid;
    var sid=req.query.sid;
    mysql.query(`select * from result where zid=${zid} and sid=${sid}`,function (err,result) {
        if(result.length>0){
            res.end("err")
        }else{
            res.end("ok");
        }
    })
})




module.exports = router;
