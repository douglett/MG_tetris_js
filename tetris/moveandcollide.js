//holds a bunch of useful functions to do with block movement and collision

function fall() {
	if (!env.gameInPlay)
		return;
	
	env.block.moveDown();
	
	if (collision())
		resolveCollide();
	
	drawScreen();
	env.fallTimerId = setTimeout('fall()', env.fallSpeed);
}



function resolveCollide() {
	
	//move the block back up to it's original position
	env.block.moveUp();
	
	//adds the current block to the map
	for (var y=0; y<env.block.height; y++)
		for (var x=0; x<env.block.width; x++)
			if (env.block.blockMap[y][x] > 0) //don't write blank boxes
				env.map[y+env.block.posY][x+env.block.posX] = env.block.blockMap[y][x];
	
	//delete lines and add points				
	deleteLines();

	env.block = env.nextBlock; //block in waiting becomes the current block
	env.nextBlock = new Block(); //create a new block
	showNextBlock(); //show the next block in the appropriate canvas
	
	if (collision()) {  //in this circumstance, we have immediately collided with a 
		endGame(); 	 //block, signifying the games end
		return false; //collision resolution unsuccessful
	}
	
	return true; //collision resolution successful
}


//checks for and handles collisions.
//returns true if collision detected
function collision() {
	
	//for each block in the blockMap
	for (var y=0; y<env.block.height; y++)
		for (var x=0; x<env.block.width; x++)
			if ( env.block.blockMap[y][x] > 0 ) {  //if we are looking at a filled-in block
			
				//collision with the bottom
				if ( y+env.block.posY >= env.map.height )
					return true;
			
				//collision with another block
				else if ( env.map[y+env.block.posY][x+env.block.posX] > 0 ) 
					return true;
			
			}
	
	return false;	
}


//a special case of collision where we reshuffle the block
function sideCollision() {
	
	for (var y=0; y<env.block.height; y++)
		for (var x=0; x<env.block.width; x++)
			if ( env.block.blockMap[y][x] > 0 ) {  //filled in block
			
				//left wall
				if ( x+env.block.posX < 0 )
					return true;
				
				//right wall	
				else if ( x+env.block.posX >= env.map.width )
					return true;
			
			}
	
	return false;
}


//goes through the map and deletes full lines
function deleteLines() {
	var hole;
	var lineno = 0;
	for (var y=0; y<env.map.height; y++) {
		
		//find any holes in this line
		hole = false;
		for (var x=0; x<env.map.width; x++)
			if (env.map[y][x] == 0)
				hole = true;
				
		//if no holes in this line, it is complete, so we remove it, and make each line fall down
		if (!hole) {
			for (var yy=y; yy>0; yy--)
				env.map[yy] = env.map[yy-1];
			env.map[0] = new Array();
			for (var i=0; i<env.map.width; i++)
				env.map[0].push(0);  //put a new blank line at the top
			lineno++;
		}
		
	}
	
	if (lineno > 0)
		scoreAdd(lineno);
}
