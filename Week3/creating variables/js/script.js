/**
 * Creating variables
 * Leah Song
 * 
 * Experimenting with creating variables
 */

"use strict";

let holeSize = 180;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(480,480);
}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    // The cheese
    background(255, 255, 0);

    // The note
    push();
    noStroke();
    fill(0);
    ellipse(140,175,holeSize);
    pop();
}