var createError = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');

var indexRouter  = require('./routes/homepage');
var usersRouter  = require('./routes/users');
var addScoreCard = require('./routes/postScoreCard');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + 'public/index.html'));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error   = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// TODO: consolidate routes
        //Add mongoose
// var routes = require('./routes')

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/add-scorecard', addScoreCard);
// app.use('/', routes);


var port = process.env.PORT || '3001';

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

module.exports = app;