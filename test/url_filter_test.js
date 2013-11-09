var should = require('should')
  , URLFilter = require('../lib/url_filter').URLFilter

describe('URLFilter', function () {
  var filter = URLFilter.create()
    , withURL = require("./fixtures/twitter/update_with_url.json")
    , noURL = require("./fixtures/twitter/update_without_url.json")

  it('should only emit updates with URLs', function (done) {
    var results = []

    filter.write(JSON.stringify(noURL));
    filter.write(JSON.stringify(withURL));

    filter.on('data', function (update) {
      results.push(update);
    });

    filter.on('end', function () {
      results.length.should.eql(1)

      var update = JSON.parse(results[0]);
      update.entities.urls.length.should.eql(1)

      return done();
    });

    filter.end();
  });
});