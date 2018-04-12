var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

/* GET home page.
 *
  *
  *
  * */

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

    /*先查考过没有
    *
    *      事务处理
    *   数据库的    库存  10     购物车 0
    * */

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


/*查询已经考过的*/

router.get("/kaoshied",function (req,res) {

    var sid=req.query.sid;
    var sql="select  zuti.id as zutiid,teach.name as tname from result,zuti,teach where sid="+sid+" and result.zid=zuti.id and zuti.teachid=teach.id"
    console.log(sql);
    mysql.query(sql,function (err,result) {

        res.end(JSON.stringify(result));
    })
})

/*查询考完的结果*/

router.get("/kaoshiedInfo",function (req,res) {
    var zid=req.query.id;
    var sid=req.query.sid;

    //1.  查当前这套题

    var tis="";
    var scores=[];
    mysql.query("select * from zuti where id="+zid,function (err,result) {
        var con=result[0].con.split("|");

        for(var i=0;i<con.length;i++){
            var arr=con[i].split(":");
            tis+=arr[0]+",";
            scores.push(arr[1]);
        }
        tis=tis.slice(0,-1);

        //2. 查询具体的题目

        mysql.query(`select * from test where id in (${tis}) order by field (id,${tis})`,function (err1,result1) {
           // console.log(result1);

            //3. 查询你的答题的结果

             mysql.query(`select * from result where sid=${sid} and zid=${zid}`,function (err2,result2) {

                 // 得到 正确的题目

                 var success=[];
                 var errors=[];

                 var arr=result2[0].selectSuccess.split("|");
                 for(var i=0;i<arr.length;i++){
                     var arr1=arr[i].split(":");
                     success.push(arr1[0]);
                 }

                 var errarr=result2[0].selectErr.split("|");
                 for(var i=0;i<errarr.length;i++){
                     var errarrarr1=errarr[i].split(":");
                     errors.push(errarrarr1[0]);
                 }

                 var jianda=result2[0].jiandaScore.split("|");





                 for(var i=0;i<result1.length;i++){

                     if(result1[i].typeid==3){
                         for(var j=0;j<jianda.length;j++){

                           var arr=jianda[j].split(":")
                             if(result1[i].id==arr[0]){
                                 result1[i].score=arr[1];
                             }
                         }

                         result1[i].ok="yes";

                     }else {
                         result1[i].score = scores[i];
                         result1[i].options = result1[i].options.split("|");
                         if (result1[i].typeid == 2) {
                             result1[i].daan = result1[i].daan.split("|")
                         }


                         var flag = true;
                         for (var j = 0; j < success.length; j++) {
                             if (result1[i].id == success[j]) {
                                 flag = false
                                 result1[i].ok = "yes";
                                 break;
                             }
                         }
                         if (flag) {
                             result1[i].ok = "no";
                         }

                     }

                 }


                 console.log(result1)
                res.end(JSON.stringify(result1));

             })

        })


    })




})


router.get("/daanInfo",function (req,res) {

    var id=req.query.id;
    mysql.query("select daan from test where id="+id,function (err,result) {

        res.end(JSON.stringify(result[0].daan))
    })
})




module.exports = router;
