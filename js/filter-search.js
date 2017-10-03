function myfunction() {
	var input, filter, dl, dd, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	dl = document.getElementById("swatchSearch");
	// changed from data-tags to dd
	dd = document.getElementByName("dd");
	// may need to change this later
	for (i = 0; i < data-tags.length; i++) {
		a = data-tags[i].getElementByTagName("dd"); 
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			dd[i].style.display = "";
		} else {
			dd[i].style.display = "none";
		}
	}
}	

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