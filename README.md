# okmaybe

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
