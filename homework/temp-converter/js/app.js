


$('#farenheit').keydown(function(){
	var tempFarenheit = $('#farenheit').val();
	tempFarenheit = parseInt(tempFarenheit)
	var celsiusSolution = ((tempFarenheit - 32)/ 1.8); 
	$('#celsius').val(celsiusSolution);

	if (tempFarenheit < 70) {
		$('body').css('background-color', 'blue');
	}
	else  {
		$('body').css('background-color', 'red');
	}
		
});

$('#celsius').keydown(function(){
	var tempCelsius = $('#celsius').val();
	var farenheitSolution = ((parseInt(tempCelsius) * 1.8) + 32); 
$('#farenheit').val(farenheitSolution);

});

