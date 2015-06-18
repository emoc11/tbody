(function($){

	$(function(){

		$carousel = $(".tshirt-carousel"),
		$prevBtn = $(".tshirt-carousel-wrapper .prev"),
		$nextBtn = $(".tshirt-carousel-wrapper .next");

		$carousel.owlCarousel({
			items : 1,
			autoplay: true
		});

		$prevBtn.on('click', function(){
		  	$carousel.trigger('prev.owl.carousel');
		})

		$nextBtn.on('click', function(){
		  	$carousel.trigger('next.owl.carousel');
		})

	});

})(jQuery);

