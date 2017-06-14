function getThatSwatch () {
	document.write('Swatches for deeper complexions! Coming Soon');
}

//function getSwatch(image, color, name, brand, finish, price) {
	//var swatchSearch = image + color;
	//var swatchClick = price + brand + formula;
//var swatchInfo = [swatchSearch + swatchClick];
	//return swatchInfo;
}


//constructor notation
var lipstick = new Object();
lipstick.image = 'img/purple_lip.jpg';
lipstick.name = 'Shameless';
lipstick.hue = 'purple';
liptick.brand = 'Revlon';

lipstick.searchSwatch = function() {
	return this.image + this.name;

};

	
//var findSwatch = document.getElementById('hue');
//findSwatch.textContent = swatchOne.hue;


//var swatchTwo = getSwatch(2,'pink','Petal Pink','YSL','glossy',34)
 




 