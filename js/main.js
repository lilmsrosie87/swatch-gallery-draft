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
function Product (image, name, hue, brand, price) {
	this.image = image
	this.name = name;
	this.hue = hue;
	this.brand = brand;
	this.price = price;
	
	this.findSwatch = function() {
		return this.image + this.name; 
};
	
	
//updating an object page 107	
var teddyBare = new product('img/nude_lip.jpg', 'Teddy Bare', 'brown', 'Milani', 8);
var shameLess = new product('img/purple_lip.jpg', 'Shameless', 'purple', 'Revlon', 7);


//var lipstick = new product();
//lipstick.image = 'img/purple_lip.jpg';
//lipstick.name = 'Shameless';
//lipstick.hue = 'purple';
//lipstick.brand = 'Revlon';

lipstick.search = function() {
	return this.image + this.name;
};

//var getSwatch = document.getElementById('lipstickImage');
//getSwatch.textContent = lipstick.image;
	
//var findSwatch = document.getElementById('hue');
//findSwatch.textContent = swatchOne.hue;


//var swatchTwo = getSwatch(2,'pink','Petal Pink','YSL','glossy',34)
 




 