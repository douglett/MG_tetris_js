function keydown(e) {
	if (env.gameInPlay && e.keyCode == 37) {  //left
		env.leftKey = true;
		holdKey();
	}
	if (env.gameInPlay && e.keyCode == 39) {  //right
		env.rightKey = true;
		holdKey();
	}
	
	//quickly fall to the bottom of the screen
	if (env.gameInPlay && e.keyCode == 40) {  //down
		while(!collision())
			env.block.moveDown();
		resolveCollide();
		drawScreen();
	}
	
	//rotate the block piece
	if (env.gameInPlay && e.keyCode == 38) {  //up
		env.block.rotate();
		drawScreen();
	}
}


function keyup(e) {
	if (env.gameInPlay && e.keyCode == 37)  //left
		env.leftKey = false;
	if (env.gameInPlay && e.keyCode == 39)  //right
		env.rightKey = false;
	
	if (e.keyCode == 82) {  //R
		clearTimeout(env.fallTimerId); //stop the blocks from falling twice
		newGame();
	}
}


//moves the blocks when keys are being held
function holdKey() {
	if (!env.gameInPlay || (!env.leftKey && !env.rightKey))
		return;
	
	if (env.leftKey)
		env.block.moveLeft();
	if (env.rightKey)
		env.block.moveRight();
	
	drawScreen();
	setTimeout('holdKey()', env.keyRepeatDelay);
}
