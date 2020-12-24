 
$(document).ready(function(){
  $('.header-slider').slick({
  	infinite: true,
  	autoplay:true,
  	autoplayspeed:2000,
  	dots:true,
  	vertical: true,
  	arrows:false,
  	dotsClass:'header-dots',
  });
  $('.menu__btn').on('click',function() {
  	$('.menu__list').slideToggle()
  })
});