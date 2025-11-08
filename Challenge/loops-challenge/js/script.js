/**
 * Loops Challenge
 * Leah Song
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let lineStroke1 = 0;
    let lineStroke2 = 0;
    let x = 0;
    let y = 0;

   
// for loop for gradient
    for (let i = 0; i<= height; i ++){
        let strokeMap = map (i, 0, height, 0, 255);
        // mapping it to number from 0 - 255
        stroke (strokeMap);
        line(0, i, width, i);
    }

// while loop for vertical lines
    while (lineStroke1 <= 250) {
        stroke(lineStroke1);
        line (x, y, x, height);
        lineStroke1 += 25
        x += 50;
    }

// while loop for horizontal lines 
    while (lineStroke2 <= 250) {
        stroke(lineStroke2);
        line (0, y, width, y);
        lineStroke2 += 25
        y += 50;
    }
    
    // stroke(0);
    // line(0, 0, 0, height);
    
    // stroke(25);
    // line(50, 0, 50, height);
    
    // stroke(50);
    // line(100, 0, 100, height);
    
    // stroke(75);
    // line(150, 0, 150, height);
    
    // stroke(100);
    // line(200, 0, 200, height);
    
    // stroke(125);
    // line(250, 0, 250, height);
    
    // stroke(150);
    // line(300, 0, 300, height);
    
    // stroke(175);
    // line(350, 0, 350, height);
    
    // stroke(200);
    // line(400, 0, 400, height);
    
    // stroke(225);
    // line(450, 0, 450, height);
    
    // stroke(250);
    // line(500, 0, 500, height);
}