var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require("request");
var Twitter = require('twitter');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

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

app.use('/', routes);
app.use('/users', users);


// var options = { method: 'GET',
//   url: 'https://api.twitter.com/1.1/search/tweets.json',
//   qs:
//    { oauth_consumer_key: '6MLmp0LrsKaDY2T0ArfpK04t9',
//      oauth_token: '229684520-vZJ1nkqkhjyLAcrOaPtHS0OJDKEJjZIjnFdJVdqn',
//      oauth_signature_method: 'HMAC-SHA1',
//      oauth_timestamp: '1479927034',
//      oauth_nonce: 'C7JyEMcNNgs',
//      oauth_version: '1.0',
//      oauth_signature: 'SC1rf2pHdzm40kiQ1tDKfP1xy/w=',
//      q: 'iovotosi' },
//   headers:
//    { 'postman-token': '1e82c63d-4adc-b784-6dfb-c0367c29468f',
//      'cache-control': 'no-cache',
//      authorization: 'OAuth oauth_consumer_key=\\"6MLmp0LrsKaDY2T0ArfpK04t9\\",oauth_token=\\"229684520-vZJ1nkqkhjyLAcrOaPtHS0OJDKEJjZIjnFdJVdqn\\",oauth_signature_method=\\"HMAC-SHA1\\",oauth_timestamp=\\"1479926904\\",oauth_nonce=\\"flAz3N3ZNeB\\",oauth_version=\\"1.0\\",oauth_signature=\\"M1FJJEimcWTFwRLllGNIs5PzrNw%3D\\"' } };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   var data = JSON.parse(body);
// });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
    console.log(err.message);
  });
}


module.exports = app;
