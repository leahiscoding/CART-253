/**
 * Introducing events
 * Leah Song
 * 
 * Taking a look at how events work in JavaScript and p5.js
 */

"use strict";

/**
 * Creates the canvas, makes the canvas black
 */
function setup() {
    createCanvas(400,400);
    background(0);
}


/**
 * 
*/
function draw() {

}

/**
 * Draws a circle at the mouse location when the mouse is pressed
 */
function mousePressed() {
    // function will happen when the mouse is pressed
    // at the exact moment this function is called we know that the mouse is just pressed down
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}