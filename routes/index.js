var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '6MLmp0LrsKaDY2T0ArfpK04t9',
  consumer_secret: 't2ofwkheeqAK0RCORnFo8wTjuP02qrAKlFIgLHoI4jk9sNoJkL',
  access_token_key: '229684520-vZJ1nkqkhjyLAcrOaPtHS0OJDKEJjZIjnFdJVdqn',
  access_token_secret: 'QUmUYF2AbKGr4RRXDrVt4uGTRcu1FiiZynKr0xwL6c2uA'
});

var params = {q: 'iovotosi'};
var params2 = {q: 'iovotono'};
var dataSx;
var dataDx;

/* GET home page. */
router.get('/', function(req, res, next) {


  client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {

      //console.log('IOVOTOSI: '+tweets.statuses[0].entities.hashtags[0].text);
      dataSx = tweets.statuses;

      client.get('search/tweets', params2, function(error, tweets2, response) {
        if (!error) {
          dataDx = tweets2.statuses;

            res.render('pages/index', {

              dataSx: dataSx,
              dataDx: dataDx

            });
        }
      });

    }
  });




});

module.exports = router;
