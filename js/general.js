(function($){

	$(function(){

		$popup_loginOpen = $(".openPopup_login"),
		$popup_loginClose = $(".popup_login--container");

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

