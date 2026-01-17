/**
 * Trisolaris
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Poorly.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
    drawSun(250, 300, 50);
}
// same function drawSun but with different parameters

function drawSun(x, y, size){
    push();
    noStroke();
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}
// x, y, size will act like a variable inside the function

/**
 * Draws the first sun
 */
// function drawSun1() {
//     push();
//     noStroke();
//     fill("#f99736");
//     ellipse(500, 100, 80);
//     pop();
// }

// /**
//  * Draws the second sun
//  */
// function drawSun2() {
//     push();
//     noStroke();
//     fill("#f99736");
//     ellipse(350, 180, 200);
//     pop();
// }

// /**
//  * Draws the third sun
//  */
// function drawSun3() {
//     push();
//     noStroke();
//     fill("#f99736");
//     ellipse(120, 100, 160);
//     pop();
// }

// The only difference is the information in ellipse
// Maybe we can create a function that draws a sun given its parameters?

// functions exist so that we don't write the same code over and over again

