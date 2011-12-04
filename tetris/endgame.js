function endGame() {
	
	env.gameInPlay = false; //stop the game
	clearTimeout(env.fallTimerId); //stop the blocks from falling
	
	//prepare to draw the final screen (otherwise, drawScreen() might overwrite our work)
	setTimeout('drawFinalScreen()', env.frameDelay*2);
	
}

function drawFinalScreen() {
	
	//darken the screen
	env.buf.fillStyle = 'rgba(0, 0, 0, 0.6)';
	env.buf.fillRect(0, 0, env.width, env.height);
	
	//giant R
	env.buf.font = "100px Monospace";
	env.buf.fillStyle = 'rgba(255, 255, 255, 0.7)';
	env.buf.fillText('R', 20, 120);
	
	flip();
	
}