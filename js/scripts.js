jQuery(function( $ ) {
	'use strict';

	$('.service-item-button').click(function() {
		// Close all tabs

		var $boxHeight1 = $(this).siblings('.accordion-item-content').height();

		if ($(this).parent().hasClass('open') ) {
			$(this).parent().removeClass('open');
		} else {
			$('.accordion-item').removeClass('open')
			$(this).parent().addClass('open');
		}

		var $boxHeight = $(this).siblings('.accordion-item-content').height();

		console.log($(this).parent().scrollTop());
		console.log($boxHeight1, $boxHeight);
		console.log($(this).parent().hasClass('open'));
	});

});
