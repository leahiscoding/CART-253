/**
 * Frogfrogfrog
 * Leah Song
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */
"use strict";
//Set up canvas
function setup() {
    createCanvas(800, 500);
    startScreen();
}

//Start screen
function startScreen (){
    background (0);
    fill (255);
    textAlign (CENTER);
    textSize (32);
    text ("Space Frog", width/2, height/2 - 40);
    textSize (16);
    text ("Press SPACE to start game", width/2, height/2+80);
}