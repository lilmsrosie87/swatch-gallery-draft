// below is from Javascript/Jquery book, but did not work
// function myfunction() {
	// var input, filter, dl, dd, a, i;
	// input = document.getElementById("myInput");
	// filter = input.value.toUpperCase();
	// dl = document.getElementById("swatchSearch");
	// (note) changed from data-tags to dd
	// dd = document.getElementByName("dd");
	// (note) may need to change this later
	// for (i = 0; i < data-tags.length; i++) {
		// a = data-tags[i].getElementByTagName("dd"); 
		// if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			// dd[i].style.display = "";
		// } else {
			// dd[i].style.display = "none";
		// }
	// }
// }	


// this is code used from Codify; hopefully this will work


// var lipstick = [
	// {
		// image: "img/mentedPinkSwatch.png",
		// name: "Pretty in Pink",
		// brand: "Mented Cosmetics",
		// hue: "pink",
	// },
	// {
		// image: "img/copenhagen.jpg",
		// name: "Copenhagen",
		// brand: "NYX",
		// hue: "red",
	// },
	// {
		// image: "img/dubai.jpg",
		// name: "Dubai",
		// brand: "NYX",
		// hue: "nude",
	// },
	// {
		// image: "img/stunnaBitchFenty.jpg",
		// name: "Stunna",
		// brand: "Fenty Beauty",
		// hue: "red",
	// }
// ]


// object constructor notation

// constructor function for swatches

function Swatch(image, name, brand, hue) {
	this.image = image;
	this.colorName = name; 
	this.brandName = brand; 
	this.hue = hue;
}

// create a new swatch
var stunna = new Swatch("img/stunnaBitchFenty.jpg", "Stunna", "Fenty Beauty", "red");
var lolita = new Swatch("img/lolitakvd.jpg", "Lolita", "Kat Von D Beauty", "nude/brown");

// display to ensure it's working; still getting undefined
document.getElementById("myTurn").innerHTML = "New swatch is " + stunna.colorName + " " + stunna.image;


// for enter button to work
var btn = document.getElementById("userInput");
btn.addEventListener("keypress", function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

function swatchOnPreta() {
	var userdata = document.getElementById(myInput);
	
	console.log(userdata);
	console.log("user value is: " userdata.value);
	
	// loop through swatch object constructor array; STOPPED HERE
	// ____________________________
	for(var i = 0; i < (object constructor array).length; i = i + 1) {
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		
		console.log("current product in loop is: (object constructor array)[i].colorName);
	



























// from JS book, but console stated that line 2 and 31 are undefined

// (function() {
	// var imgs = ('#gallery img');
	// var search = ('#filter-search');
	// var cache = [];
	
	// imgs.each(function() {
		// cache.push({
			// element: this,
			// text: this.alt.trim().toLowerCase()
		// });
	// });
	
	// function filter() {
		// var query = this.value.trim().toLowerCase();
	
		// cache.forEach(function(img) {
			// var index = 0;
			// if (query) {
				// index = img.text.indexOf(query);
			// }
		
			// img.element.style.display = index === -1 ? 'none' : ''; 
		// });
	// }
	
	// if ('oninput' in $search[0]) {
		// $search.on('input', filter);
	// } else {
		// $search.on('keyup', filter);
	// }
// }());