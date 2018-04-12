var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var fangxiang = require('./routes/fangxiang');
var login = require('./routes/login');
var classes = require('./routes/classes');
var stu = require('./routes/stu');
var type = require('./routes/type');
var test = require('./routes/test');
var teach = require('./routes/teach.js');

/*老师客户端*/
var ctl = require('./routes/teach/login');
var teachtest = require('./routes/teach/test');
var teachzuti = require('./routes/teach/zuti');


/*学生客户端*/

var stulogin=require("./routes/stu/login")
var stukaoshi=require("./routes/stu/kaoshi")

var app = express();
app.listen(8888,function () {
    console.log(8888)
});
var md5=require("./routes/md5");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/users', users);
app.use('/api/fangxiang', fangxiang);
app.use("/api/login",login)
app.use("/api/classes",classes)
app.use("/api/stu",stu)
app.use("/api/type",type)
app.use("/api/test",test)



/*老师端*/
app.use("/api/teach",teach)
app.use("/api/ctl",ctl)
app.use("/api/teachtest",teachtest)
app.use("/api/teachzuti",teachzuti)

/*学生端*/
app.use("/api/stuLogin",stulogin)
app.use("/api/stukaoshi",stukaoshi)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
