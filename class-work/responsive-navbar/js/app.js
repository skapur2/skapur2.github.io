$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})

	$('#burger').click(function() {
	$('#mobile-nav').slideToggle();
});
	})

// 1.click event on burger
// 2.slidetoggle on mobile-nav

