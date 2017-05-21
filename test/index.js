var okmaybe = require('..');
var assert = require('assert');

var maybe;
var resolved;
var rejected;

function resolveit() {
  resolved = true;
}

function rejectit() {
  rejected = true;
}

function reset() {
  maybe = okmaybe();
  maybe.promise.then(resolveit);
  maybe.promise.then(rejectit);
}

reset();
assert.strictEqual(true, 
  maybe.promise instanceof Promise,
  'maybe.promise should be a Promise');
console.log('maybe.promise OK');

reset();
resolveit();
assert.strictEqual(true, resolved,
  'maybe.resolve() should resolve the Promise');
console.log('maybe.resolve() OK');

reset();
rejectit();
assert.strictEqual(true, rejected,
  'maybe.reject() should reject the Promise');
console.log('maybe.reject() OK');
