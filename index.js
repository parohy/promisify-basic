'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.default = function(func) {
  return function() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function(resolve, reject) {
      var callback = function callback(err, value) {
        return err ? reject(err) : resolve(value);
      };
      func.apply(undefined, [].concat(args, [callback]));
    });
  };
};
