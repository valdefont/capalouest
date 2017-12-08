// Scroll Top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  /*if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }*/
           var scroll = $(window).scrollTop();
 
       if (scroll >= 550) {
         $('.main_header').css({'height' : '150px'});
         $('.main_header').css({'padding-top' : '5px' , 'padding-bottom' : '0px'});
     } 
});
