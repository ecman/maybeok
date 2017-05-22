# okmaybe

[![build status](https://api.travis-ci.org/ecman/maybeok.png)](https://travis-ci.org/ecman/maybeok) [![codecov](https://codecov.io/gh/ecman/maybeok/branch/master/graph/badge.svg)](https://codecov.io/gh/ecman/maybeok) [![Code Climate](https://codeclimate.com/github/ecman/maybeok/badges/gpa.svg)](https://codeclimate.com/github/ecman/maybeok)

Delegate promise resolution

# Usage

```js
var okmaybe = require('okmaybe');

function dependent() {
  var maybe = okmaybe();
  // performWork();
  dependency(maybe);
  return maybe.promise;
}

function dependency(maybe) {
  // doMoreWork();
  maybe.resolve();
}
```
