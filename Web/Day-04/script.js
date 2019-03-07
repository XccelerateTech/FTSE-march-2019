var scroll = new SmoothScroll('a[href*="#"]');

(function ($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);


//change the nav bar from transparent to solid - vice versa
$(document).ready(function () {
  $(window).scroll(function () { // check if scroll event happened
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      $('.navbar').removeClass('navbar-light');
      $('.navbar').addClass('solid');
      $('.navbar-brand').addClass('navbar-brandActive')

    } else if ($(document).scrollTop() < 50 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
      $('.navbar').removeClass('solid');
      $('.navbar-brand').removeClass('navbar-brandActive')
      $('.navbar').addClass('navbar-light');
    }


  });
});