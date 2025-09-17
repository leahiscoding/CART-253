/**
 * Title of Project
 * Leah Song
 * 
 * Learning what a variable is and does
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640,640)
}


/**
 * Draws a circle in the centre of the cavans
*/
function draw() {
    background(0);

    // Draw the circle
    push();
    fill(mouseX,mouseY,mouseX)
    noStroke();
    ellipse(width/2, height/2, mouseX, mouseY);
    pop();
}