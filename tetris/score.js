function scoreAdd(lineno) {
	
	env.lines += lineno;
	env.level = ( env.lines >= 100 ? 10 : parseInt((env.lines+1)/10) );
	env.fallSpeed = 200 + (10 - env.level)*80; //drop speed increases by 0.08 seconds, from 1 second to 200ms
	env.score += ((env.level+1)*100) * (lineno * lineno); //large bonus for getting multiple lines at once!
	
	document.getElementById('level').innerHTML = env.level;
	document.getElementById('lines').innerHTML = env.lines;
	document.getElementById('score').innerHTML = env.score;
	
}