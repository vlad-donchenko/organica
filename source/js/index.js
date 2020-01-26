'use strict';

(function () {
  var SCROLL_DURATION = 700;
  var SHOW_BACK_TO_TOP_BUTTON = 500;
  var customSelects = $('.custom-select');
  var scrollTopButton = $('.scroll-top');

  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });

  if (customSelects) {
    customSelects.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }

  var scrollBodyClickHandler = function (evt) {
    evt.preventDefault();
    $('body,html').animate({scrollTop: 0}, SCROLL_DURATION);
  };

  var hiddenBackToTopButtonScrollHandler = function () {
    if ($(window).scrollTop() > SHOW_BACK_TO_TOP_BUTTON) {
      scrollTopButton.addClass('scroll-top--show');
    } else {
      scrollTopButton.removeClass('scroll-top--show');
    }
  };

  $(window).on('scroll', hiddenBackToTopButtonScrollHandler);
  scrollTopButton.on('click', scrollBodyClickHandler);

})();
