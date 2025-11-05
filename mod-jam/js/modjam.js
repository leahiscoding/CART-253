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
let finishState = "end";
let score = 0;
let frog = {
    x: 400,
    y: 550,
    size: 30

};

//Set up canvas
function setup() {
    createCanvas(800, 600);
    startScreen();
}

function draw (){
    if (gameState === "start"){
        startScreen();
    }
    else if (gameState === "play"){
        gameScreen();
        moveFrog();
    }
    else if (gameState === "end"){
        endScreen();
    }
}


//Start screen
function startScreen () {
    background (0);
    textAlign (CENTER);
    textFont('Courier New');
    textSize (32);
    fill("#66FF33");
    text ("Space FrogFrogFrog", width/2, height/2 - 40);
    textSize (16);
    text ("Press SPACE to start game", width/2, height/2+80);
}

// Press space to start game
function keyPressed() {
    if (gameState === "start" && key === " ") {
        gameState = "play";
    }
    
}

//game screen
function gameScreen (){
    background (0);
    fill("#66FF33");
    drawFrog();
}


function drawFrog(){
    push();
    fill("#66FF33");
    noStroke();
    square (frog.x, frog.y, frog.size);
    pop();
}

function moveFrog() {
    if (keyIsDown (LEFT_ARROW) === true){
        frog.x = frog.x - 5;
    }
    if (keyIsDown (RIGHT_ARROW) === true){
        frog.x = frog.x + 5;
    }
    if (keyIsDown (DOWN_ARROW) === true){
        frog.y = frog.y + 5;
    }
    if (keyIsDown (UP_ARROW) === true){
        frog.y = frog.y - 5;
    }
    frog.x = constrain(frog.x, 0, width - frog.size);
    frog.y = constrain(frog.y, 0, height - frog.size);
}
