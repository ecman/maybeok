function okmaybe() {
  var fulfill;
  var cancel;
  var promise = new Promise(
    function (resolve, reject) {
      fulfill = resolve;
      cancel = reject;
    }
  ); 
  return {
    'promise': promise,
    'resolve': fulfill,
    'reject': cancel
  };
}

module.exports = okmaybe
