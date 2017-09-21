(function() {
	var $imgs = $('#gallery img');
	var $search = $('#filter-search');
	var cache = [];
	
	$imgs.each(function() {
		cache.push({
			element: this,
			text: this.alt.trim().toLowerCase()
		});
	});
	
function filter() {
	var query = this.value.trim().toLowerCase();
	
	cache.forEach(function(img) {
		var index = 0;
		if (query) {
			index = img.text.indexOf(query);
		}
		
		