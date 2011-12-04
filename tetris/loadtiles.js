function loadtiles() {
	env.tiles.push(null); //tile 0 is empty
	
	for (var i=1; i<=7; i++) {
		var img = new Image();
		img.src = "images/" + i + ".png";
		env.tiles.push(img);
	}
	
	setTimeout('preload()', 20);
}

function preload() {
	for (var i=1; i<=7; i++)
		if (!env.tiles[i].complete) {
			setTimeout('preload()', 20);
			return;
		}
	newGame();
}