var ntwitter = require('ntwitter')
  , URLFilter = require('./lib/url_filter').URLFilter
  , CONFIG = require('./config.json')


function main() {
  openTwitterStream(function (twitterStream) {
    onTwitterData(twitterStream, printUpdate);
  });
}

function onTwitterData(twitterStream, callback) {
  var filter = URLFilter.create()

  filter.on('data', callback);

  twitterStream.on('data', function (updateStruct) {
    filter.write(JSON.stringify(updateStruct));
  });
}

function openTwitterStream(callback) {
  var twitter = new ntwitter(CONFIG);
  twitter.stream('user', callback);
}

function printUpdate(updateString) {
  var update = JSON.parse(updateString)

  console.log('-------------------------------------------------------------');
  console.log(update.user.name, '('+ update.user.screen_name +')');
  console.log(update.created_at);
  console.log(update.text);

  console.log(' -- links ->');
  update.entities.urls.forEach(function (url) {
    console.log(url.expanded_url);
  });
}

main();
