/**
 * Plain Javascript Event
 * Leah Song
 * 
 * Experimenting with event handling in Plain Javascript
 */

"use strict";

// Information about the current and possible background fills
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#FFFFFF"
    },
    switchKey: 32 // Space Bar
};

/**d
 * Creates the canvas
*/
function setup() {
    createCanvas (400, 400);
    
    // Listen for keypresses
    window.addEventListener("keydown", changeBG);
    // addEventListener > I would like to know when this thing happens
    // keydown > key is pressed down
    // changeBG > when that happens, run this function
}

/**
 * Displays the background
*/
function draw() {
    background(bg.fill);
}


/**
 * Switches the background from black to white
 */
function changeBG (event) {
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}
