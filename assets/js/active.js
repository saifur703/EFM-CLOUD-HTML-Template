(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    new WOW().init();

    /*==============================
            BOTTOM SCROLL TOP BUTTON
        ================================*/

    var scrollTop = $('.scrollTop');
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css('opacity', '1');
      } else {
        $(scrollTop).css('opacity', '0');
      }
    });
    $(scrollTop).on('click', function () {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });

  jQuery(window).on('load', function () {});
})(jQuery);
