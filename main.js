$(document).ready(function(){
    var $menu=$("#header");
		$window = $(window),
		$banner__diamond= $('.banner__diamond'),
		$banner_title = $('.banner__title');
		$banner_subtitle = $('.banner__subtitle');
		
		
	$banner__diamond.addClass('is-loading');
	$banner_title.addClass('is-loading');
	$banner_subtitle.addClass('is-loading');

	$window.on('load', function() {
		window.setTimeout(function() {
			$banner__diamond.removeClass('is-loading');
			$banner_title.removeClass('is-loading');
			$banner_subtitle.removeClass('is-loading');
		}, 100);
	});
			
	$(window).scroll(function(){
	    if ($(this).scrollTop()> 100 && $menu.hasClass("default")){
		    $menu.removeClass("default").addClass("fixed");
			$('.header__title').css('display','inline-block');
			} else if($(this).scrollTop() <=100 && $menu.hasClass("fixed")){
			    $menu.removeClass("fixed").addClass("default");
				$('.header__title').css('display','none');
			}
	});

	$('.menu__title').on('click', function(){
		$('.shadow-block').toggle('fast');
		$('.menu_hidden').toggle('fast');
	});
	
	
	
	$('.menu_hidden__close').on('click',function(){
		$('.shadow-block').toggle('fast');
		$('.menu_hidden').toggle('fast');
	});
	
	$('.reciepe__item').mouseenter(function(){
		var $cl = $(this).children();
		$cl.css('bottom','20%');
	});
	$('.reciepe__item').mouseleave(function(){
		var $cl = $(this).children();
		$cl.css('bottom','0');
	});
}); 