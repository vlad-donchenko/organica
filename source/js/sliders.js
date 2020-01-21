'use strict';

(function () {
  var workSlider = $('.work-slider__slider');
  var reviews = $('.reviews__slider');

  if (workSlider) {
    workSlider.slick({
      lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1
    });
  }

  if (reviews) {
    reviews.slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      prevArrow: $('.reviews__arrow--prev'),
      nextArrow: $('.reviews__arrow--next'),
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });
  }
})();
