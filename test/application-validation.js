var test        = require('tape');
var Application = require('../lib/Application.js');

test('register string tag', function(t) {
  t.plan(1);
  var app = new Application();
  t.throws(function() { app.register(4, {}); }, TypeError);
  app.register('asdf', {});
});
