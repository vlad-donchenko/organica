'use strict';

(function () {
  var body = $('body');
  var modalButtons = $('.button--modal');

  if (modalButtons) {
    var cloeModal = function () {
      body.removeClass('overflow-modal');
      var modal = $('.modal--open');
      modal.removeClass('modal--open');
      modal.find('modal__close').off('click', closeModalCLickHandler);
      var form = modal.find('form');
      if (form) {
        form.trigger('reset');
      }
      $(document).off('click', closeModalOutsideClickHandler);
      $(document).off('keydown', closeModalKeyPressHandler);
    };

    var closeModalOutsideClickHandler = function (evt) {
      if ($(evt.target).hasClass('modal')) {
        cloeModal();
      }
    };

    var closeModalKeyPressHandler = function (evt) {
      var isEsc = evt.key === 'Escape';
      if (isEsc && $(evt.target).closest('.modal__form-item').children().length === 0) {
        cloeModal();
      }
    };

    var closeModalCLickHandler = function (evt) {
      evt.preventDefault();
      cloeModal();
    };

    var showModalCLickHandler = function (evt) {
      evt.preventDefault();
      body.addClass('overflow-modal');
      var modalName = '#' + $(evt.target).attr('data-modal');
      var closeButton = $(modalName).find('.modal_close');
      var formInputs = $(modalName).find('input');
      $(modalName).addClass('modal--open');

      if (formInputs) {
        $(formInputs[0]).focus();
      } else {
        closeButton.focus();
      }

      closeButton.on('click', closeModalCLickHandler);
      $(document).on('click', closeModalOutsideClickHandler);
      $(document).on('keydown', closeModalKeyPressHandler);
    };

    modalButtons.each(function (index) {
      $(modalButtons[index]).on('click', showModalCLickHandler);
    });
  }

})();
