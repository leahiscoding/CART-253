/**
 * Week 6 Live Coding
 * Leah Song
 * 
 * In Class Coding Project
 */

"use strict";


/**
 * Create the canvas
*/
// can't put const because the variable will not change otherwise
let timer =  {
    startTime:0,
    timePassed:0,
    timeInterval:10000
}
let finishState = "none"
let gameState = "start"
let score = 0
function setup() {
    createCanvas (500,500);
    background (0);
        setTimeout (startGame,5000);
    //console.log (timer.startTime)
    timer.timePassed = millis ()
}


/**
 * 
*/

// Event handler for timer
function startGame () {
    gameState = "play"
        // setTimeout(keepScore,20000) > very handy but there are other ways to use timer
    timer.startTime = millis ()
}

function draw() {
    // millis or framecount
    if (gameState==="start") { 
        startScreen ();
    }
    else if(gameState==="play"){
        gameScreen ();
    }
    else if(gameState==="end")
        endScreen ();
        
}


    


/**
 * 
*/
function startScreen () {
    background ("#006affff");
}

/**
 * 
*/
function gameScreen () {
    background ("#90ee90");
    displayRect ();
    displayScore ();
    displayTimer ();
    
    timer.timePassed = millis () - timer.startTime;
    // we put it in setup because we want it to move only one time
    if (timer.timePassed > timer.timeInterval) {
        gameState = "end"
        if (score >=10) {
            finishState = "win"
        }
        else {
            finishState = "lose"
        }
    }
}


/**
 * 
*/
function endScreen () {
    background ("#923e24ff");
}

/**
 * if you click 1/3 of the screen your score will go up
 */
function mousePressed(){
    if (gameState === "play"){
        if (mouseX <  width/3) {
            score++;
            // adding score
        }
        else{
            score --;
        }
   
    }//play
    
}
function displayRect (){
    push();
    textSize(24)
    fill(255);
    noStroke();
    rect(0,0,width/3,height)
    // "" > string if you don't want it to be literal word/string
    pop();
}

function displayScore () {
    push();
    textSize(24)
    fill(255);
    text(score,width-150,50)
    // "" > string if you don't want it to be literal word/string
    pop();
}

function displayTimer (){
    push();
    textSize(24)
    fill(255);
    text(floor(timer.timePassed/1000),width-150,120)
    // or 10 - floor (timer.timePassed/1000)
    // "" > string if you don't want it to be literal word/string
    // floor > cutting off the decimals
    pop();
}

// we need boolean conditions becasue if conditions rely on boolean 