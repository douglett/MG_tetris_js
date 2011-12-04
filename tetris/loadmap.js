function loadMap() {
	
	var map = new Array();
	var w = 10;
	var h = 20;
	
	var t;
	for(var y=0; y<h; y++) {
		t = new Array();
		for (var x=0; x<w; x++)
			t.push(0);
		map.push(t);
	}
	
	map.width = w;
	map.height = h;
	
	return map;
	
}