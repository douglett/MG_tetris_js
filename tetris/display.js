//displays the complete screen
function display() {
	
	env.drawingNextFrame = false;
	cls();
	showMap();
	env.block.show();
    flip();
	//console.log("screen drawn");
	
}