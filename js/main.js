/*
	GENERAL CONFIG
  ~
  concerns the entire page
*/

$(window).on('resize', function() {

	var width = $(window).width();
  var horz_pad = ['300px', '150px', '50px'];
  var i = 0;

	if (width <= 840) {
  	i = 2;
  } else if (width <= 1280) {
  	i = 1;
  } else {
  	i = 0;
  }
  
  $('.header').css('padding-left', horz_pad[i]);
  $('.header').css('padding-right', horz_pad[i]);
  
  $('.top').css('padding-left', horz_pad[i]);
  $('.top').css('padding-right', horz_pad[i]);
  
  $('.section').css('padding-left', horz_pad[i]);
  $('.section').css('padding-right', horz_pad[i]);
   
  $('.features').css('padding-left', horz_pad[i]);
  $('.features').css('padding-right', horz_pad[i]);

  $('.testimonials').css('padding-left', horz_pad[i]);
  $('.testimonials').css('padding-right', horz_pad[i]);

  $('.footer').css('padding-left', horz_pad[i]);
  $('.footer').css('padding-right', horz_pad[i]);

});