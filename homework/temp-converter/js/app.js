

$('#convertcelsius').click(function(){
	var tempFarenheit = $('#farenheit').val();
	var tempCelsius = $('#celsius').val();
	var celsiusSolution = ((parseInt(tempFarenheit)) - 32)/ 1.8; 
$('#solution').text(celsiusSolution);
	var farenheitSolution = ((parseInt(tempFarenheit)) - 32)/ 1.8; 
$('#solution').text(celsiusSolution);
})