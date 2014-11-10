var test = require('tape');

var Application = require('../lib/Application.js');

var billy = require('../index.js');

test('api test', function(t) {
  t.plan(2);
  t.strictEqual(billy.Application, Application);
  t.strictEqual(billy, Application);
});
