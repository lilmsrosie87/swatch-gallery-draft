function getThatSwatch () {
	document.write('Swatches for deeper complexions! Coming Soon');
}

function getSwatch(image, color, brand, formula, price) {
	var swatchSearch = image + color;
	var swatchClick = price + brand + formula;
var swatchInfo = [swatchSearch + swatchClick];
	return swatchInfo;
}

var swatchOne = getSwatch(1,'red','MAC','matte',16)
var swatchTwo = getSwatch(2,'pink','YSL','glossy',34) 




 