var ntwitter = require('ntwitter');
var config = require('./config.json')

var twitter = new ntwitter(config);

twitter.stream('statuses/sample', function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});