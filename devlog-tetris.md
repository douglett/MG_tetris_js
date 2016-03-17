Tetris in a Day: Finished!
--------------------------
September 4th, 2010
I overran by about 1.5 hours, but I had things to do during the day so no biggie. Pretty tired now, but here it is:

http://totem9.net/projects/tetris/tetris.html

Works fine in Firefox and Chrome, but Opera does something strange with the formatting of the scoreboard. Some investigation and proper testing in different browsers is necessary.

Firefox gives this error on first load:

uncaught exception: [Exception... "Component returned failure code: 0x80040111 (NS_ERROR_NOT_AVAILABLE) [nsIDOMCanvasRenderingContext2D.drawImage]" nsresult: "0x80040111 (NS_ERROR_NOT_AVAILABLE)" location: "JS frame :: http://localhost:8888/tetris/tetris/block.js :: anonymous :: line 8" data: no]

No Idea what that’s all about, perhaps I am drawing to the canvas element before it is ready, must make sure to force firefox to check if all elements are ready to go before beginning.

Ultimately this is a good learning experience and blahblahblah, I will critique it more tomorrow, i’ve kinda lost the energy to continue today. But it is fun… I spent about half of todays development time playing it :) . Guess I actually made a game which is actually good to play.

UPDATE: I moved the drop and rotate functions to keydown instead of keyup. I don’t know why I did that in the first place, but it certainly makes the game seem sluggish. Now it’s more functional and nicer to play.



Tetris in a Day: Midnight Update
--------------------------------
September 4th, 2010
Well everything seems to be working out quite nicely – it is 12.49 and Tetris is in a basic working state! Tomorrow I will add a scoring system and a ‘next piece’ system, as well as a game restart. I would also like to add x1, x2, x3 buttons, but that could take a lot of messing around in CSS checking that it looks nice.

Surprisingly this is not going to take all that long at all.



Tetris in a Day
---------------
September 3rd, 2010
Today I intend to make Tetris in a day using HTML 5. I am starting at 19.00 Fri and should be finished by 19.00 sat. No super special techniques, just Tetris that works and is fun-ish to play!

OK, begin!
