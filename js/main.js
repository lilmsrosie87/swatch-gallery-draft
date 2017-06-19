function getThatSwatch () {
	document.write('Swatches for deeper complexions! Coming Soon');
}

//function getSwatch(image, color, name, brand, finish, price) {
	//var swatchSearch = image + color;
	//var swatchClick = price + brand + formula;
//var swatchInfo = [swatchSearch + swatchClick];
	//return swatchInfo;
//}


//constructor notation with many objects
function swatch (image, name, hue, brand, price) {
	this.image = 
	this.name = name;
	this.hue = hue;
	this.brand = brand;
	this.price = price;
	
	this.findSwatch = function() {
		return this.image + this.name; 
};
	

var lipstick = new Object();
lipstick.image = 'img/purple_lip.jpg';
lipstick.name = 'Shameless';
lipstick.hue = 'purple';
lipstick.brand = 'Revlon';

lipstick.search = function() {
	return this.image + this.name;

};
//var getSwatch = document.getElementById('lipstickImage');
//getSwatch.textContent = lipstick.image;
	
//var findSwatch = document.getElementById('hue');
//findSwatch.textContent = swatchOne.hue;


//var swatchTwo = getSwatch(2,'pink','Petal Pink','YSL','glossy',34)
 




 