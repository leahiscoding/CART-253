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
    size: 80,
    velocityX: 5,
    velocityY: 5,
};

//Game control
let stage = 0;

// Multimedia:
let spacekermit1;
let spacekermit2;
let spacekermit3;

// Preload multimedia
function preload(){
    spacekermit1 = loadImage ("assets/images/spacekermit1.webp");
    spacekermit2 = loadImage ("assets/images/spacekermit2.webp");
}



//Set up canvas
function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);
    startScreen();
}

// Draw function to switch between game states
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
    textStyle(BOLD);
    fill("#66FF33");
    stroke(150);
    strokeWeight(5);
    textSize (49);
    text ("Space Frog!Frog!Frog!", width/2, height/2-50);
    textSize (16);
    text ("Press SPACE to start game", width/2, height/2+25);
    image (spacekermit1, width/2+245, height/2 + 150, 300, 300);
}

// Press space to start game
function keyPressed() {
    if (gameState === "start" && key === " ") {
        gameState = "play";
    }
    
}

//game screen
function gameScreen (){
    push();
    background (0);
    fill("#66FF33");
    drawFrog();
    moveFrog();
    pop();
}

//Draw the frog
function drawFrog(){
    push();
    fill("#66FF33");
    noStroke();
    //square (frog.x, frog.y, frog.size);
    image (spacekermit2, frog.x, frog.y, frog.size, frog.size);
    pop();
    
}

//Move the frog according to the arrow keys
function moveFrog() {
    if (keyIsDown (LEFT_ARROW) === true){
        frog.x = frog.x - frog.velocityX;
    } //left arrow moves frog to left  
    if (keyIsDown (RIGHT_ARROW) === true){
        frog.x = frog.x + frog.velocityX;
    } // right arrow move frog to right
    if (keyIsDown (DOWN_ARROW) === true){
        frog.y = frog.y + frog.velocityY;
    } // down arrow moves frog down
    if (keyIsDown (UP_ARROW) === true){
        frog.y = frog.y - frog.velocityY;
    } // up arrow moves frog up
    frog.x = constrain(frog.x, 0, width-50);
    frog.y = constrain(frog.y, 0, height-50);
}
