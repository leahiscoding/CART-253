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

// Game state variable
let gameState = "start";
let score = 0;

//Set up canvas
function setup() {
    createCanvas(800, 600);
    startScreen();
}

//Start screen
function startScreen (){
    background (0);
    textAlign (CENTER);
    textFont('Courier New');
    textSize (32);
    fill("#66FF33");
    text ("Space Frog", width/2, height/2 - 40);
    textSize (16);
    text ("Press SPACE to start game", width/2, height/2+80);
}

// Press space to start game
function keyPressed() {
    if (key === ' ') {
        gameState = "play";
    }
}
