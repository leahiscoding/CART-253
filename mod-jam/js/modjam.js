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
let fireintent = false;

// Game objects
let frog = {
    x: 400,
    y: 550,
    size: 80,
    velocityX: 5,
    velocityY: 5,
};
let rocket = {
    x: frog.x,
    y: frog.y,
    position: 0, // keep track of where the projectile currently is
    size: 20,
    speed: 30,
};
let fire = false;

let fly = {
    x: 0,
    y: 0, // Will be random
    size: 10,
    speed: 5
}
let flygroup = [];

//Game control
let stage = 0;

// Multimedia:
let spacekermit1;
let spacekermit2;
let laser;
let asteroid;

// Preload multimedia
function preload(){
    spacekermit1 = loadImage ("assets/images/spacekermit1.webp");
    spacekermit2 = loadImage ("assets/images/spacekermit2.webp");
    laser = loadImage ("assets/images/laser.png");
    asteroid = loadImage ("assets/images/asteroid.webp");
}



//Set up canvas
function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);
    startScreen();
    // initialize fly position
    for (let flyCounter = 0; flyCounter < 20; flyCounter += 1){
        flygroup.push({
            x: random (0, width),
            y: random (0 + frog.size, height - frog.size),
            size: 10,
            speed: random (2, 6)
        });
    }
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
        rocket.position = 0;
        rocket.x = frog.x;
        rocket.y = frog.y;
        return; //Sabine I don't understand why return should be added here
    }

    if (gameState === "play" && key === " " && rocket.position === 0) {
        fireintent = true;
        rocket.position = 1; // set rocket position to moving
        return;
    }
    
}

//game screen
function gameScreen (){
    push();
    background (0);
    fill("#66FF33");
    //moveFly();
    drawFly();
    drawRocket();
    drawFrog();
    moveFrog();
    shootRocket();
    checkRocketHit();
    drawFlygroup();
    moveFlygroup();
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
    frog.x = constrain(frog.x, 0 + frog.size/3, width - frog.size/3);
    frog.y = constrain(frog.y, 0+ frog.size/3, height - frog.size/3);
}

function drawRocket(){ 
    push();
    fill(255, 0, 0);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color(255, 255, 255);
    image (laser, rocket.x, rocket.y, rocket.size, rocket.size);
    pop();
}
function shootRocket(){

// keep track and fire rockets
    if (rocket.position === 0){ {
        rocket.x = frog.x;
        rocket.y = frog.y;
    }
    } // if fire is true and rocket position is 0, rocket position becomes 1 and rocket starts at frog position

    if (rocket.position === 1){
        rocket.y -= rocket.speed;
    } // if rocket position is 1, rocket moves up

    if (rocket.y <= 0){
        rocket.position = 0;
        rocket.x = frog.x;
        rocket.y = frog.y;
    } // if rocket goes off screen, reset to frog position and rocket position becomes 0
    
}



function drawFly() {
    push();
    noStroke();
    fill(255);
    image(asteroid,fly.x, fly.y, fly.size);
    pop();
}

function drawFlygroup() {
    for (let i = 0; i < 20; i++){
        push();
        noStroke();
        fill(255);
        image(asteroid, flygroup[i].x, flygroup[i].y, flygroup[i].size);
        pop();  
    }
}

function moveFlygroup(){
    for (let i = 0; i < 20; i++){
        flygroup[i].x += flygroup[i].speed;
        if (flygroup[i].x > width){
            flygroup[i].x = 0;
            flygroup[i].y = random(0 + frog.size, height - frog.size);
        }
    }
}

// function moveFly() {
//     // Move the fly
//     fly.x += fly.speed;
//     // Handle the fly going off the canvas
//     if (fly.x > width) {
//         resetFly();
//     }
// }

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0
    fly.y = random(0+frog.size , height-frog.size);
}

function checkRocketHit (){

    if (rocket.position !== 1)return; // only check for hits if rocket is moving

    for (let i = 0; i < 20; i++){
        const rocketRadiusFly = dist (rocket.x, rocket.y, flygroup[i].x, flygroup[i].y);
        // calculate the distance
        if (rocketRadiusFly <= rocket.size/2 + flygroup[i].size/2){
            flygroup[i].y = -1000; // move fly off screen
        rocket.position = 0;
        rocket.x = frog.x;
        rocket.y = frog.y;
        score++;
    
        }
    }
   
}

