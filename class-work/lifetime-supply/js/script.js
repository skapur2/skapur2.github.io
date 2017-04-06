document.querySelector('#click-me').omclick = function () {
	var age = document.querySelector('#age').value;
	var maxage = document.querySelector('#max-age').value;
	var drink = document.querySelector('#item').value;
	var drinksPerDay = document.querySelector('#num-per-day').value;

	var drinksLeft = (parseInt(maxage) - parseInt(age)) * parseInt(drinksPerDay) * 365;
	document.querySelector('#solution').innerHTML = drinksLeft;
	document.querySelector('#drink').innerHTML = drink;

}