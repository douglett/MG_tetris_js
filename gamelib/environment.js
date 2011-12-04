function Environment(screenName, bufferName, scale) {
	
	//set up the backbuffer
	this.bufferSource = document.getElementById(bufferName);
	this.buf = this.bufferSource.getContext('2d');
	this.buf.mozImageSmoothingEnabled = false;
	this.width = this.bufferSource.offsetWidth;
	this.height = this.bufferSource.offsetHeight;
	
	//set up the main screen
	this.screenSource = document.getElementById(screenName);
	this.scr = this.screenSource.getContext('2d');
	this.scr.mozImageSmoothingEnabled = false;
	this.scale = scale;
	
	//general information about the tiles
	this.tiles = new Array(); //will hold the tileset
	this.tilesize = 10;
	
	//general map information
	this.map = new Array();
	this.map.width = 0;
	this.map.height = 0;
	
	//viewport info
	this.viewX = 0;
	this.viewY = 0;
	this.viewXOffset = 0;
	this.viewYOffset = 0;
	this.viewHeight = this.height / this.tilesize;
	this.viewWidth  = this.width  / this.tilesize;
	
	//timing info
	this.frameDelay = 17;
	this.drawingNextFrame = false;
	this.keyRepeatDelay = 90;
	this.fallTimerId = 0;
	
	//game info
	this.fallSpeed = 200;
	this.level = 0;
	this.lines = 0;
	this.score = 0;
	this.leftKey = false;
	this.rightKey = false;
	this.gameInPlay = true;
	
	//player pieces
	this.block = null;
	this.nextBlock = null;

}// end Environment


//this global variable will hold the environment
var env;

function setUpEnvironment(screenName, bufferName, scale) {
	env = new Environment(screenName, bufferName, scale);
}
