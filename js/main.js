function getThatSwatch () {
	document.write('Swatches for deeper complexions! Coming Soon');
}



//constructor notation with many objects
 function product(image, name, hue, brand, price) {
	 this.image = image
	 this.name = name;
	 this.hue = hue;
	 this.brand = brand;
	 this.price = price;
}
	 
var lipstick = new product(); {
	lipstick.image = 'img/purple_lip.jpg';
	lipstick.name = 'Shameless';
	lipstick.hue = 'purple';
	lipstick.brand = 'Revlon';

}
//from https://stackoverflow.com/questions/14299917/making-a-simple-javascript-image-gallery

	var ImageCnt = 0
	
	//this.findSwatch = function() {
		//return this.image + this.name; 
		
	function swatch(){
    ImageCnt++;
    document.getElementById('gallery').style.background = 'lipstick(' + [ImageCnt] + ')';
};
	
	
//updating an object page 107	
var teddyBare = new product('img/nude_lip.jpg', 'Teddy Bare', 'brown', 'Milani', 8);
var shameLess = new product('img/purple_lip.jpg', 'Shameless', 'purple', 'Revlon', 7);]

	document.write(teddyBare);
