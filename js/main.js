function getThatSwatch () {
	document.write('Swatches for deeper complexions! Coming Soon');
}

function getSwatch(image, color, name, brand, finish, price) {
	var swatchSearch = image + color;
	var swatchClick = price + brand + formula;
var swatchInfo = [swatchSearch + swatchClick];
	return swatchInfo;
}


//dot notation
var 

//literal notation
var swatchOne = {
	image: 'img/purple_lip.jpg'
	hue: 'purple'
	name: 'Shameless'
	brand: 'Revlon'
	finish: 'matte'
	price: 8
	searchForBrand: function() {
		return this.brand + this.hue;
	}
};
	
var findSwatch = document.getElementById('hue');
findSwatch.textContent = swatchOne.searchForBrand();


//var swatchTwo = getSwatch(2,'pink','Petal Pink','YSL','glossy',34)
 




 