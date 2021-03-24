$(window).scroll(function() {

    /* get current scroll-position within window */
    var scroll = $(window).scrollTop();
    
    $('.nav-menu li').each(function() {

        /* get position of navigation-element (distance from top minus half of it's height, so that it changes color while it's half over black and half over white background) */
        var elementPositionTop = parseFloat($(this).offset().top) + (parseFloat($(this).height() / 2));

        /* change color for each background-change */
        if (elementPositionTop >= 320 && elementPositionTop <= 640 || elementPositionTop >= 960 && elementPositionTop <= 1280) {
            $(this).addClass('whiteText');
        } else {
            $(this).removeClass('whiteText');
        }
    });
});


// slide in effect

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');