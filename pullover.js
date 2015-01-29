// @author Olle Törnström <olle@studiomediatech.com>
(function(define) {

  define('pullover', function(require, exports) {

    var $ = require('jquery');

    console.info('Hello from PulloverJS!');

    exports = $.extend(exports, {
      // TODO: Add API here...
    });

  });

}(typeof define === 'function' && define.amd ? define : function(id, factory) {

  if (typeof exports !== 'undefined') {

    factory(require, exports);

  } else {

    factory(function(value) {
      return window[value];
    }, (window[id] = {}));

  }

}));
