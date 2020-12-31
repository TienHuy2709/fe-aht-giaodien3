(function($) {
	
	/*$('.header__menu__icon__search').on('click', function () {
		$('#nav-aside').removeClass('nav-no-active');
		$('#nav-aside').addClass('nav-active');

	});*/

	$(document).click(function(event) {
		if (!$(event.target).closest($('#nav-aside')).length) {
			if ( $('#nav-aside').hasClass('nav-active') ) {
				$('#nav-aside').removeClass('nav-active');
				$('#nav-aside').addClass('nav-no-active');
			} else {
				if ($(event.target).closest('.header__menu__icon__search').length) {
					$('#nav-aside').addClass('nav-active');
					$('#nav-aside').removeClass('nav-no-active');
				}
			}
		}
	});

	$('.nav-aside-close').on('click', function () {
		$('#nav-aside').removeClass('nav-active');
		$('#nav-aside').addClass('nav-no-active');
	});
	var stt = 0;
	var endImg = $("img.slide-img:last").attr("alt");
	$("#next").click(function () {
		if (++stt > endImg) {
			stt = 0;
		}

		$("img.slide-img").hide();
		$("img.slide-img").eq(stt).fadeIn(500);

	});

	$("#prev").click(function () {
		if (--stt < 0) {
			stt = endImg;
		}

		$("img.slide-img").hide();
		$("img.slide-img").eq(stt).fadeIn(500);

	});
	window.onload = function()
	{
		$("img.slide-img").hide();
		$("img.slide-img:first").show();
	};
/*	setInterval(function () {
        $("#next").click();
    }, 3000);*/
})(jQuery);