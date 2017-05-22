# okmaybe

[![build status](https://api.travis-ci.org/ecman/okmaybe.png)](https://travis-ci.org/ecman/okmaybe) [![codecov](https://codecov.io/gh/ecman/okmaybe/branch/master/graph/badge.svg)](https://codecov.io/gh/ecman/okmaybe) [![Code Climate](https://codeclimate.com/github/ecman/okmaybe/badges/gpa.svg)](https://codeclimate.com/github/ecman/okmaybe)

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
