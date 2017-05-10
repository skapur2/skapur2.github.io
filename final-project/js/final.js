$(document).ready(function() {
	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
		}
	);

});

$(window).on("load", function() {
  $( '#img1' ).fadeIn( 50, function() {
    $( '#img2' ).fadeIn( 75, function() { 
    $( '#img3' ).fadeIn( 100, function() { 
    $( '#img4' ).fadeIn( 125, function() { 
    $( '#img5' ).fadeIn( 150 ) 
    });
    });
    });
    });


  });
// $('.intro').fadeIn(200);
// $('#img1').fadeIn(500);
// $('#img2').fadeIn(800);
// $('#img3').fadeIn(1100);
// $('#img4').fadeIn(1400); 
// $('#img5').fadeIn(1700);



    // Animation complete
  // 10 seconds

