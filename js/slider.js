$(document).ready(function () {
	//Setting options
	var speed = 500; 		//Fade speed
	var autoswitch = true;	//Autoslider option
	var autoswitch_speed = 4000 //Autoslider speed

	//Hides all slides initially
	$('.slide').hide();

	//Add initial active class to first slide
	$('.slide').first().addClass('active');

	//Shows first slide through .active
	$('.active').show();

	//Next slide handler
	$('.right').on('click', nextSlide);

	//Previous slide handler
	$('.left').on('click', prevSlide);

	//Autoslider handler
	if(autoswitch == true) {
		setInterval(nextSlide, autoswitch_speed);
	}

	//Switch to previous slide function
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	//Switch to next slide function
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	};
});
