var total = 0;

// user clicks #a10 - handle with .click
// add 10 to 'total' total = total + 10;
// write total to out

$('#a10').click(function(){
	total = total + 10;
	$('#out').text(total);
})

$('#a20').click(function(){
	total = total + 20;
	$('#out').text(total);
})

$('#a30').click(function(){
	total = total + 30;
	$('#out').text(total);
})

$('#n10').click(function(){
	total = total - 10;
	$('#out').text(total);
})

$('#n20').click(function(){
	total = total - 20;
	$('#out').text(total);
})

$('#n30').click(function(){
	total = total - 30;
	$('#out').text(total);
})

$('#out').click(function() {
	total = 0;
	$('#out').text(total);
	$('#out').css('background','white');
})

$('#red').click(function() {
	$('#out').css('background','red');
})

$('#blue').click(function() {
	$('#out').css('background','blue');
})