var test        = require('tape');
var Application = require('../lib/Application.js');

test('register string tag', function(t) {
  t.plan(1);
  var app = new Application();
  t.throws(function() { app.register(4, {}); }, TypeError);
});

test('register service twice', function(t) {
  t.plan(1);
  var app = new Application();

  var T = function() { };
  app.service(T);
  t.throws(function() { app.service(T); });
});
