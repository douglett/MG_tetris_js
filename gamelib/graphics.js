//standard function to 'flip' from the backbuffer to the screen
function flip() {
	env.scr.drawImage(env.bufferSource, 0, 0, env.width*env.scale, env.height*env.scale);
}


//clears the screen to black
function cls() {
	env.buf.fillStyle = 'black';
	env.buf.fillRect(0, 0, env.width, env.height);
}

//a generic function for plotting the map on to the backbuffer
function showMap() {
	for (var y=0; y<env.map.height; y++)
		for (var x=0; x<env.map.width; x++)
			if (env.map[y][x] > 0)
				env.buf.drawImage( env.tiles[env.map[y][x]] ,  //env.block.blockType -> interesting flashy colours!
									x*env.tilesize, 
									y*env.tilesize );
}

function drawScreen() {
	if (env.drawingNextFrame == true) 
		return; //already drawing it
	env.drawingNextFrame = true;
	setTimeout('display()', env.frameDelay);
}
