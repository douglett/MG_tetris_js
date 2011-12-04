//blockType == number from 1-7
function Block(btype) {
	
	this.show = function() {
		for (var y=0; y<this.height; y++)
			for (var x=0; x<this.width; x++)
				if (this.blockMap[y][x] > 0)
					env.buf.drawImage( env.tiles[this.blockType], (x+this.posX)*env.tilesize, (y+this.posY)*env.tilesize );
	}
	
	this.moveLeft = function() {
		this.posX--;
		if (sideCollision() || collision())
			this.posX++; //move it back
	}
	
	this.moveRight = function() {
		this.posX++;
		if (sideCollision() || collision())
			this.posX--;
	}
	
	this.moveDown = function() {
		this.posY++;
	}
	this.moveUp = function() {
		this.posY--;
	}
	
	this.rotate = function() {
		var map = new Array();
		var t;
		for (var x=0; x<5; x++) { //do the coordinates in the wrong order here...
			t = new Array();
			for (var y=4; y>=0; y--) //...and go backwards here...
				t.push(this.blockMap[y][x]) //...but the right order here. rotates 90 deg. clockwise
			map.push(t);
		}
		this.blockMap = map;
		
		//if we collide with the sides now, we must move away
		if (this.posX < 4)  //left wall
			while (sideCollision())
				this.posX++;
		else
			while (sideCollision())
				this.posX--;
		
		//if we collide with the bottom, move up
		while (collision())
			this.posY--;
	}
	
	
	if (!btype)  //when undefined, make a random block
		btype = parseInt(Math.random()*7)+1;
	
	//make the black blockMap 5x5 array
	this.blockMap = new Array();
	for (var i=0; i<5; i++)
		this.blockMap.push ( new Array(0, 0, 0, 0, 0) );
	
	if (btype == 1) {  // L shape
		this.blockMap[0][2] = btype;
		this.blockMap[1][2] = btype;
		this.blockMap[2][2] = btype;
		this.blockMap[2][3] = btype;
	}
	else if (btype == 2) {  // L shape, reversed
		this.blockMap[0][2] = btype;
		this.blockMap[1][2] = btype;
		this.blockMap[2][2] = btype;
		this.blockMap[2][1] = btype;
	}
	else if (btype == 3) {  // S shape, 
		this.blockMap[1][2] = btype;
		this.blockMap[2][3] = btype;
		this.blockMap[2][2] = btype;
		this.blockMap[3][3] = btype;
	}
	else if (btype == 4) {  // S shape, reversed
		this.blockMap[1][3] = btype;
		this.blockMap[2][3] = btype;
		this.blockMap[2][2] = btype;
		this.blockMap[3][2] = btype;
	}
	else if (btype == 5) {  // Square
		this.blockMap[2][2] = btype;
		this.blockMap[2][3] = btype;
		this.blockMap[3][2] = btype;
		this.blockMap[3][3] = btype;
	}
	else if (btype == 6) {  // T shape
		this.blockMap[2][1] = btype;
		this.blockMap[2][2] = btype;
		this.blockMap[2][3] = btype;
		this.blockMap[3][2] = btype;
	}
	else if (btype == 7) {  // Long shape
		this.blockMap[0][2] = btype;
		this.blockMap[1][2] = btype;
		this.blockMap[2][2] = btype;
		this.blockMap[3][2] = btype;
	}
	
	this.blockType = btype;
	this.width = this.blockMap[0].length;
	this.height = this.blockMap.length;
	this.posX = 2;
	this.posY = 0;
	
}