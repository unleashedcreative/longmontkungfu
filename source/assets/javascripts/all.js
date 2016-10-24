jQuery(document).ready(function($){

	// slick sliders
  if ($('.slick-slider').length) {
    $('.slick-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
  		arrows: false
  	});
  }



	// random home page hero
	var random;
	random = Math.floor(Math.random() * $('.hero-bkgrnd').length);
	$('.hero-bkgrnd').hide().eq(random).show();



	// hamburger icon (http://callmenick.com/_development/css-hamburger-menu-icons/)
	(function() {
    "use strict";
    var toggles = document.querySelectorAll(".nav-trigger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  })();

	// navigation movement (slides content over)
	var isLateralNavAnimating = false;

	// open/close lateral navigation
	$('.nav-trigger').on('click', function(event){
		event.preventDefault();

		//stop if nav animation is running
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

			$('body').toggleClass('navigation-is-open');
			$('.main-nav').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				// animation is over
				isLateralNavAnimating = false;
			});
		}

	});

});
