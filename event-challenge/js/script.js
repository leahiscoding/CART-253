/**
 * Event-Challenge
 * Weini, Ziyan, Leah
 * 
 * Doing an event challenge
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

// define the function
function lose()
{
    gameOver = true
}
// loses when you press the key
window.addEventListener("keyup",function(){
    lose ();
})
// function keyReleased(){
//     lose ();
// }
// // loses when the mouse is pressed
window.addEventListener("mouseup",function(){
    lose ();
})
// function mouseIsPressed ()
// {
//     lose ();
// }
// // loses when the mouse is released
// function mouseReleased(){
//     lose ();
// }
// // loses when the mouse wheel is moved
window.addEventListener("wheel",function(){
    lose ();
})
// function mouseWheel() {
//     lose ();
// }
// // loses when the mouse is moved
window.addEventListener("mousemove",function(){
    lose ();
})
// function mouseMoved (){
//     lose ();
// }
// window.addEventListener ('offline', () => {
//     lose();
//     // all it does is calling lose but you can add console
// });
// // lambda function => calling a function and inside the function you're defining another function

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // document means our program > javascript and it's running in window and whenever we close the window the javascript is also being hidden
        lose ();
    }
});