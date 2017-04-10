function swatch('image', 'hue', 'product type', 'rating', 'availability', 'cost', 'color', 'brand') {
  this.image = image;
  this.hue = hue;
  this.productType = productType;
  this.rating = rating;
  this.availability = availability;
  this.cost = cost;
  this.color = color;
  this.brand = brand;

}


var ebonyLipArray = []

var burgundyLip = new swatch('img/burgundy_lip', 'Red','Lipstick', 'A', 'Limited Edition', 20, 'Bow Down Bitches', 'MAC');
var purpleLip = new swatch('img/purple_lip', 'Purple', 'Liptick', 'B+', 'Permanant', 28, 'Fashionably Late', 'Nars');
var nudeLip = new swatch('img/nude_lip', 'Nude/Brown', 'Lipstick', 'A-', 'Discontinued', 18, 'Butter pecan', 'Fashion Fair');
	
ebonyLipArray.push(burgundyLip)
ebonyLipArray.push(purpleLip)
ebonyLipArray.push(nudeLip)

// loop through products array
for(var i = 0; i < ebonyLippieSwatch.length; i++) {
// // create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

// // // create text for new elements
var image   = document.createTextNode(ebonyLippieSwatchArray[i].name)
var hue   = document.createTextNode("Hue: " + shirtArray[i].hue)
var productType  = document.createTextNode("Color: " + shirtArray[i].productType)
var rating  = document.createTextNode("Rating: " + shirtArray[i].rating)
var availability = document.createTextNode("Availability:" + shirtArray[i].availability)
var cost = document.createTextNode("Cost:" + ebonyLippSwatchArray[i].cost)
var color = document.createTextNode("color name" + ebonyLippieSwatch[i].color)
var brand = document.createTextNode("Brand:" + ebonyLippieSwatch[i].brand)

image.src = shirtArray[i].image

// // update class attributes
image.className = "img-responsive"
btn.className = "btn btn-primary btn-lg"
newItem.className = "col-sm-4"
newDiv.className = "Swatch" + [i] + " thumbnail"

// // add text to elements
nameH1.appendChild(image)
sizeH4.appendChild(hue)
colorH4.appendChild(productType)
stockH4.appendChild(rating)
btn.appendChild(availability)


// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

// add new item to the element with id="shirts"
document.getElementById("products").appendChild(newItem)
}





