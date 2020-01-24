'use strict';

(function () {
  var customSelects = $('.custom-select');

  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });

  if (customSelects) {
    customSelects.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }

})();
