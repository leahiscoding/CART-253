/**
 * Thinking like a computer with instructions
 * Pippin Barr
 * 
 * An ultra simple example of instructions
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
    background("#450B1C");
}
// everything in the parenthesis > argument of the instruction //
// setup is a keyword//
// function > createy your own function - in built into p5 to find inside these files //
// {} > what is contained within the function. you have to format in specific way. always have opening and closing //
// don't put multiple instruction in one line. only put one instruction per line //
// every instruction should end with semicolon // 
// make sure your code is clean! otherwise your grade will be deducted.//
// comment doesn't execute the program. it's very important to comment your code. it's a good convention to comment any functions you create. /
// // single line comment //
// /* */ multi line commment //



/**
 * Sets background, draws the eye
*/
function draw() {
    // The void
    background("#000000");
   
    push();
    noStroke ();
    fill (255,0,0)
    // fill anything draws afterwards //
    ellipse (20,20,20,20);
    // function draw is automatic lead—going back to the top of the code and redoing it. //
    // loop is automatic and part of the draw function //
    // y increases as you go down, x increases as you go right //
    pop();
   
    stroke(255)
    strokeWeight(4)
    fill (0,0,255)
    rect (100,100,50,30)
// until I change the fill, it'll be the same colour //
// I need to call fill before I draw //
// When you're animating you're basically drawing the frame and clearing the frame–clearing the canvas and drawing it again. //
// push and pop > grouping alike things together—saving the current state//

// make sure to open your console > to see errors //

// console.log > prints out to the console//
    leahsfunction();


    // The eye
   // drawEye();
}

function leahsfunction(){
    fill(80,15,230)
    rect(200,300,80,60);

}
// every function has to have parenthesis //
// the function is not defined, so I can't use it //


// function draw is a loop. it will keep executing the code inside the function until you stop it //
// allows the thing to run over time; continuously //
// setup and draw are inbuilt in p5.js 

/**
 * Draws a creepy void eye
 */
function drawEye() {
    // Eyeball
    push();
    noStroke();
    fill("#ffffff");
    ellipse(200, 200, 100);
    pop();

    // Retina
    push();
    noStroke();
    fill("#000000");
    ellipse(200, 200, 25);
    pop();
}

// file name without spaces //
