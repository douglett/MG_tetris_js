function showNextBlock() {
	cls();
	env.nextBlock.show();
	//flip();
	
	var nxt = document.getElementById('nextpiece').getContext('2d');
	nxt.mozImageSmoothingEnabled = false;
	var w = 50;
	var h = 50;
	
	//offsets
	//if (env.block.blockType == 
	
	nxt.fillStyle = 'black';
	nxt.fillRect(0, 0, w*env.scale, h*env.scale);
	nxt.drawImage(env.bufferSource, 2*env.tilesize, 0, w, h, 0, 0, w*env.scale, h*env.scale);
	//nxt.drawImage(env.bufferSource, 0, 0);
}