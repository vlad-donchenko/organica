'use strict';

(function () {
  var body = $('body');
  var header = $('.site-header');
  var main = $('main');
  var navigation = $('.navigation ');
  var languageSwitcher = $('.lang-switch');

  var fixedHeaderScrollHandler = function () {
    var headerHeight = header.outerHeight();

    if ($(window).scrollTop() > headerHeight) {
      header.addClass('site-header--fixed');
      main.css('padding-top', headerHeight);
    } else {
      header.removeClass('site-header--fixed');
      main.css('padding-top', 0);
    }
  };

  $(window).on('scroll', fixedHeaderScrollHandler);

  if (navigation) {
    var menuButtonToggle = $('.navigation__toggle');
    navigation.removeClass('navigation--no-js');

    var openMenuClickHandler = function () {
      body.toggleClass('overflow-hidden');
      navigation.toggleClass('navigation--open');
    };

    menuButtonToggle.on('click', openMenuClickHandler);
  }

  if (languageSwitcher) {
    var languageSwitcherButton = $('.lang-switch__current');

    var closeLanguageSwitcherOutsideClickHandler = function (evt) {
      evt.preventDefault();
      if ($(evt.target).closest('.lang-switch').children().length === 0) {
        languageSwitcher.removeClass('lang-switch--open');
        $(document).off('click', closeLanguageSwitcherOutsideClickHandler);
      }
    };

    var toggleLanguageSwitcherClickHandler = function (evt) {
      evt.preventDefault();
      languageSwitcher.toggleClass('lang-switch--open');
      $(document).on('click', closeLanguageSwitcherOutsideClickHandler);
    };

    languageSwitcherButton.on('click', toggleLanguageSwitcherClickHandler);
  }

})();
