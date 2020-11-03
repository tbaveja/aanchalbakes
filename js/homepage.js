$(document).ready(function() {
	
	var $screenWidth = $(window).width();
	var $screenHeight = $(window).height();
	var $scrollWidth = getScrollbarWidth();
	console.log($screenWidth);
	console.log($screenHeight);
	console.log($scrollWidth);
	function getScrollbarWidth() {
  		return window.innerWidth - document.documentElement.clientWidth;
	}

	var $landingpage = $('header.landingpage');
	$landingpage.css('height', $screenHeight + 'px');

	$('.grid__item').click(function(e) {
		var instaUrl = $(this).attr('data');
		$('.insta-iframe').attr('src', instaUrl);
		
		$('.insta-iframe').show();
		$('#mask').show();
	})
	$('#mask').click(function(e) {
		$('.insta-iframe').attr('src', '');
		$('.insta-iframe').hide();
		$('#mask').hide();
	})

	//$('#myCarousel').width($screenWidth - $scrollWidth);


	/*var $infoBoxTop = $('.info-box-1').offset().top;
	var $header = $('.header');
	var $headerHeight = $header.outerHeight();*/

	$(window).scroll(function() {
		/*var $scroll = $(window).scrollTop();
		console.log($infoBoxTop);
		console.log($scroll);
		if($scroll >= $infoBoxTop - $headerHeight) {
			console.log('i am here');
			$header.css('background', 'rgba(255,255,255,1)');
			$header.css('box-shadow', '0 1px 5px 0 #000');
		} else if ($scroll <= $infoBoxTop) {
			$header.css('background', 'rgba(255,255,255,0.5)');
			$header.css('box-shadow', '0 0 0 0 #000');
		} else {
			console.log('i am not here');
		}*/
	});

	/*function menuClick(idName) {
		console.log("id: " + idName);
		var sectionTop = $("." + idName + '-section').offset().top;
		$("html, body").animate({ scrollTop: sectionTop - $headerHeight}, 1000);
	}*/

	/*$('.menu-item').click(function() {
		var idName = $(this).attr('id');
		console.log("id: " + idName);
		menuClick(idName);
	});*/

	/*$('#mobile-menu').click(function() {
		$(this).siblings('.menu').slideToggle();
	});
*/
});
