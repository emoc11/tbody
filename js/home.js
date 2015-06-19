(function($){

	$(function(){

		$carousel = $(".tshirt-carousel"),
		$prevBtn = $(".tshirt-carousel-wrapper .prev"),
		$nextBtn = $(".tshirt-carousel-wrapper .next"),
		$popup_loginOpen = $(".openPopup_login"),
		$popup_loginClose = $(".popup_login--container");

		$carousel.owlCarousel({
			items : 1,
			autoplay: true
		});

		$prevBtn.on('click', function(){
		  	$carousel.trigger('prev.owl.carousel');
		});

		$nextBtn.on('click', function(){
		  	$carousel.trigger('next.owl.carousel');
		});



		$popup_loginOpen.on('click', function(e) {
			e.preventDefault();
			$(".popup_login--container").fadeIn("slow");
		});

		$popup_loginClose.on('click', function(e) {
			e.preventDefault();
			$(".popup_login--container").fadeOut("slow");
		});

	});

})(jQuery);

