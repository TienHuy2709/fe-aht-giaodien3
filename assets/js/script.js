(function($) {
	
	/*$('.header__menu__icon__search').on('click', function () {
		$('#nav-aside').removeClass('nav-no-active');
		$('#nav-aside').addClass('nav-active');

	});*/
	/*Menu*/
	$(document).click(function(event) {
		if (!$(event.target).closest($('#nav-aside')).length) {

			if ( $('#nav-aside').hasClass('nav-active') ) 
			{
				$('#nav-aside').removeClass('nav-active');
				$('#nav-aside').addClass('nav-no-active');
			} 

			else 
			{
				if ($(event.target).closest('.header__menu__icon__search').length) 
				{
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
	/*End menu*/

	/*Slide product*/
	function slide(lastImage, firstImage, next, prev, img ){
		var stt = 0;
		var endImg = lastImage.attr("alt");
		next.click(function () {
			if (++stt > endImg) {
				stt = 0;
			}

			img.hide();
			img.eq(stt).fadeIn(500);

		});

		prev.click(function () {
			if (--stt < 0) {
				stt = endImg;
			}

			img.hide();
			img.eq(stt).fadeIn(500);

		});

		window.onload = function()
		{
			img.hide();
			firstImage.show();
		};

	}

	slide($("img.slide-img:last"), $("img.slide-img:first"), $(".prev"), $(".next"), $("img.slide-img"));
	slide($("img.slide-img-1:last"), $("img.slide-img-1:first"), $(".prev-1"), $(".next-1"), $("img.slide-img-1"));
	slide($("img.slide-img-2:last"), $("img.slide-img-2:first"), $(".prev-2"), $(".next-2"), $("img.slide-img-2"));
	slide($("img.slide-img-3:last"), $("img.slide-img-3:first"), $(".prev-3"), $(".next-3"), $("img.slide-img-3"));
	slide($("img.slide-img-4:last"), $("img.slide-img-4:first"), $(".prev-4"), $(".next-4"), $("img.slide-img-4"));
	slide($("img.slide-img-5:last"), $("img.slide-img-5:first"), $(".prev-5"), $(".next-5"), $("img.slide-img-5"));
	slide($("img.slide-img-6:last"), $("img.slide-img-6:first"), $(".prev-6"), $(".next-6"), $("img.slide-img-6"));
	slide($("img.slide-img-7:last"), $("img.slide-img-7:first"), $(".prev-7"), $(".next-7"), $("img.slide-img-7"));	
	
	window.onload = function()
	{
		$("img.slide-img").hide();
		$("img.slide-img-1").hide();
		$("img.slide-img-2").hide();
		$("img.slide-img-3").hide();
		$("img.slide-img-4").hide();
		$("img.slide-img-5").hide();
		$("img.slide-img-6").hide();
		$("img.slide-img-7").hide();
		$("img.slide-img:first").show();
		$("img.slide-img-1:first").show();
		$("img.slide-img-2:first").show();
		$("img.slide-img-3:first").show();
		$("img.slide-img-4:first").show();
		$("img.slide-img-5:first").show();
		$("img.slide-img-6:first").show();
		$("img.slide-img-7:first").show();
	};
/*	var stt = 0;
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
	};*/
/*	setInterval(function () {
        $("#next").click();
    }, 3000);*/
})(jQuery);