'use strict';

(function () {
  var workSlider = $('.work-slider__slider');

  if (workSlider) {
    workSlider.slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
    });
  }
})();
