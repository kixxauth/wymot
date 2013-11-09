var util = require('util')
  , Transform = require('stream').Transform


function URLFilter(opts) {
  Transform.call(this, opts);
}

util.inherits(URLFilter, Transform);

URLFilter.prototype._transform = function (chunk, encoding, done) {
  var struct = JSON.parse(chunk)

  if (URLFilter.hasURL(struct)) {
    this.push(chunk);
  }

  return done();
};

URLFilter.hasURL = function (obj) {
  return !!((obj.entities || {}).urls || []).length;
};

URLFilter.create = function () {
  var stream = new URLFilter({
    decodeStrings: false
  });
  stream.setEncoding('utf8');
  return stream;
};

exports.URLFilter = URLFilter;