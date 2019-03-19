
// make the nav bar solid and not depending on the position of the page
$(document).ready(function (){
  $(window).scroll(function (){
    if($(document).scrollTop() > 50){
      $('.navbar').addClass('solid');
      $('.navbar').css({'background':"#ffffff"})
      $('.navbar-brand').addClass('navbar-brandActive');

    } else if ($(document).scrollTop() < 50) {
      $('.navbar').removeClass('solid');
      $('.navbar').css({'background':"none"})
      $('.navbar-brand').removeClass('navbar-brandActive');


    }
  })
})

var scroll = new SmoothScroll('a[href*="#"]',{
  speed:9000, 
  speedAsDuration: true
});

