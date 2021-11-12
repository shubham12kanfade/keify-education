$(document).ready(function(){
  // Course Video Slider
	$('.vdo-slider').slick({
	  slidesToShow:5,
	  arrows: true,
	  dots: true,
	  infinite: true,
	  speed: 2000,
	  cssEase: 'linear',
	  autoplaySpeed: 2000,
	  autoplay:true,
	  responsive: [
		{
		  breakpoint: 1023,
		  settings: {
			arrows: false,
			slidesToShow:2
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			slidesToShow:2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			slidesToShow:1
		  }
		}
	  ]
	});
});