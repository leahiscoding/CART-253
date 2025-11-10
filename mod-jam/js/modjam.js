/**
 * Frogfrogfrog
 * Leah Song
 * 
 * A game of Shooting asteroids (flies) with your frog laser gun
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Use spacebar to shoot asteroids (flies)
 * - Shoot 15 asteroids (flies) to win
 * - Avoid getting hit by 10 asteroids (flies) or running out of time (30 seconds) to lose
 * 
 * Made with p5
 * https://p5js.org/
 */
"use strict";

// Game state variable
let gameState = "start";
let finishState = "end";
let score = 0;

// Timer object
let timer =  { 
    startTime:0,
    timePassed:0,
    timeInterval:20000
}  // defining limited time of 20 seconds
    

// Game objects
let frog = {
    x: 400,
    y: 300,
    size: 50,
    velocityX: 5, // speed of frog movement
    velocityY: 5, // speed of frog movement
};
let rocket = {
    x: frog.x,
    y: frog.y,
    position: 0, // keep track of where the projectile currently is
    size: 20,
    speed: 35,
};
let fire = false; // keep track of whether the rocket is fired

let fly = {
    x: 0,
    y: 0, 
    size: 20,
    speed: 5
}
let flygroup = []; // array to hold multiple flies

//Game control
let fireintent = false; // keep track of whether the player intends to fire
let stage = 0;
let flyNumbers = 20; // total number of flies
// let flyCaught = 0; // number of flies caught << troubleshooted with GenAI
let kermitHit = 0; // number of times kermit got hit

// Multimedia:
let spacekermit1;
let spacekermit2;
let laser;
let asteroid;
let space;

// Preload multimedia
function preload(){
    spacekermit1 = loadImage ("assets/images/spacekermit1.webp");
    spacekermit2 = loadImage ("assets/images/spacekermit2.webp");
    laser = loadImage ("assets/images/laser.png");
    asteroid = loadImage ("assets/images/asteroid.png");
    space = loadImage ("assets/images/space.jpeg");
}


//Set up canvas
function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);
    startScreen();
    // initialize fly position
    for (let flyCounter = 0; flyCounter < 10; flyCounter += 1){
        flygroup.push({
            x: random (0, width),
            y: random (0 + frog.size/3, height),
            size: random (10,50),
            speed: random (1, 4)
        }); // add a new fly to the flygroup array
    }
}

// Draw function to switch between game states
function draw (){
    if (gameState === "start"){
        startScreen();
    } // if game state is start, show start screen
    else if (gameState === "play"){
        gameScreen();
    } // if game state is play, show game screen
    else if (gameState === "end"){
        endScreen();
    } // if gane state is end, show end screen

}



//Start screen
function startScreen () {
    background (0);
    image (space, width/2, height/2, width, height);
    textAlign (CENTER);
    textFont('Courier New'); 
    textStyle(BOLD);
    fill("255");
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
        timer.startTime = millis (); // timer function
        return; //add return so that the rest of the function doesn't run
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
    image (space, width/2, height/2, width, height);
    fill("#66FF33");
    drawRocket(); // draw the rocket
    drawFrog(); // draw the frog
    moveFrog(); // move the frog
    shootRocket(); // shoot the rocket
    checkRocketHit(); // check if rocket hits flies
    checkFrogHit(); // check if frog gets hit by flies
    drawFlygroup(); // draw the flies
    moveFlygroup(); // move the flies
    ProgressBar(); // draw progress bar
    displayTimer (); // display timer
      
    pop();

    timer.timePassed = millis () - timer.startTime; // update time passed
    checkScore(); // check score and time to see if game ends


}
//Timer

// function startGame (){
//     gameState = "play";
//     timer.startTime = millis ();
// }
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
    frog.x = constrain(frog.x, 0 + frog.size/3, width - frog.size/3); // keep frog within canvas
    frog.y = constrain(frog.y, 0+ frog.size/3, height - frog.size/3);
}

// Draw the rocket
function drawRocket(){ 
    push();
    fill(255, 0, 0);
    drawingContext.shadowBlur = 20; // use the blur property from art-jam assignment
    drawingContext.shadowColor = color(255, 255, 255);
    image (laser, rocket.x, rocket.y, rocket.size, rocket.size);
    pop();
}
function shootRocket(){

// Keep track and fire rockets
    if (rocket.position === 0){ 
        rocket.x = frog.x;
        rocket.y = frog.y;
    
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


// Draw flies using a for loop
function drawFlygroup() {
    for (let i = 0; i < flygroup.length; i++){
        push();
        noStroke();
        fill(255);
        image(asteroid, flygroup[i].x, flygroup[i].y, flygroup[i].size, flygroup[i].size); // draw each fly
        pop();  
    }
}

// Move flies using a for loop
function moveFlygroup(){
    for (let i = 0; i < flygroup.length; i++){
        flygroup[i].x += flygroup[i].speed;
        if (flygroup[i].x > width){
            flygroup[i].x = 0;
            flygroup[i].y = random(0 + frog.size/2, height); // reset fly position when it goes off screen
        }
    }
}


// Check if rocket hits flies
function checkRocketHit (){

    if (rocket.position !== 1)return; // only check for hits if rocket is moving

    for (let i = 0; i < 10; i++){
        const rocketRadiusFly = dist (rocket.x, rocket.y, flygroup[i].x, flygroup[i].y);
        // calculate the distance
        if (rocketRadiusFly <= rocket.size/2 + flygroup[i].size/2){
            flygroup[i].y = -1000; // move fly off screen
        rocket.position = 0; // reset rocket
        rocket.x = frog.x; 
        rocket.y = frog.y;
        score++; // increase score
    
        }
    }
   
}

// Check if frog gets hit by the fly
function checkFrogHit (){
    for (let i = 0; i < 10; i++){
        const frogRadiusFly = dist (frog.x, frog.y, flygroup[i].x, flygroup[i].y);
        // calculate the distance
        if (frogRadiusFly <= frog.size/2 + flygroup[i].size/2){
            flygroup[i].y = -1000; // move fly off screen
        kermitHit++; // increase kermit hit
        score--; // decrease score
    
        }
    }
}

// Progress Bar
function ProgressBar (){
    push();
    // flyCaught = score - kermitHit; // calculate flies caught
    // if (flyCaught < 0) flyCaught = 0; // prevent negative flies caught < troubleshooted with GenAI
    let currentProgress = score;
    if (currentProgress < 0) currentProgress = 0; // prevent negative flies caught
    fill (255);
    rect(50,50,700,20);
    fill ("#4B76CC");
    rect(50,50,(currentProgress/15)*700,20); // progress bar fills up as flies are caught
    pop();
}

function displayTimer () {
    push();
    textSize(24)    
    fill(255);
    noStroke();
    
    text(floor(timer.timePassed/1000),width-30,30) // display time passed in seconds
    pop();
}

    function checkScore(){
        //console.log(score)
        timer.timePassed = millis () - timer.startTime;
        if (score === 15){ // if total amount of the flies caught is 15, player wins
            finishState = "win"; // player wins
            gameState = "end"; // change game state to end
            return;
        }
        if (kermitHit >= 10) { // if kermit gets hit 10 times, player loses
            finishState = "lose"; // player loses
            gameState = "end"; //  change game state to end
            return;
            }

        if (timer.timePassed > timer.timeInterval) { // if timer exceeds time limit, player loses
            finishState = "lose"; // player loses
            gameState = "end"; // change game state to end
            return;
    }

    }
// End screen
function endScreen () {
    background ("#000000");
    image (space, width/2, height/2, width, height);
    textAlign (CENTER);
    textFont('Courier New');
    textStyle(BOLD);
    fill("255");
    stroke(150);
    strokeWeight(5);
    textSize (49);
    if (finishState === "win"){
        text ("You Win!", width/2, height/2-50);
    }
    else if (finishState === "lose"){
        text ("You Lose!", width/2, height/2-50);
    }
    textSize (16);
    text ("Refresh to play again", width/2, height/2+25);
}

