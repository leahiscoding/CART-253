/**
 * Thinking like a computer with functions
 * Pippin Barr
 * 
 * An example of a function with parameters and a return value.
 */

"use strict";

//Create simple variables

let rectx = 20;
let recty = 40;
let rectS = 50;

let sun = {
    x: 400,
    y: 50,
    size: 100,
    color: "#ceeb87"
}

let sunTwo = {
    x: 400,
    y: 50,
    size: 100,
    color: "yellow"
}

function displaySunObj (tempObj){
    push ();
    fill (tempObj.color);
    noStroke();
    ellipse (tempObj.X, tempObj.Y, tempObj.Size, tempObj.Size);
    pop();
}

function displaySun (tempX, tempY, tempSize, tempColor){
    push ();
    fill (temp.color);
    ellipse (temp_x, temp_y, temp_size, temp_size); 
    noStroke();
    pop();
}


/**
 * Create a canvas
*/
function setup() {
    createCanvas(500, 500);
}

function moveRect(tempX, tempY){
    tempX += 1;
    return tempX;
}

function moveSun (tempX) {
    tempX += 0.5;
    return tempX;
}

function moveSunObj (tempSun) {
    tempSun.x += 0.5;
}


/* every time we call the function it'll update the value
it's useful because we can change it somewhere else and the function will use the updated value */

// every time we update the value, we want the function to give it back
/* 
1. update a value / variable
2. give back the updated value
3. receive the updated value in draw
*/




/**
 * Draw the shapes, calculate a result
*/
function draw() {
    background("pink");

    // sun2.x = moveSun (sunTwo.x);
    moveSunObj (sunTwo);
    displaySunObj (sun);
    displaySunObj (sunTwo);

    //rectx = moveRect(rectx);
    // cannot put a constant value in the function if we want to update it
    fancyRect_Rev (40,50,50);
    // the value 40, 50, 50 map to fancyRect_Rev parameters tempX, tempY, tempS
    fancyRect_Rev (100,150,25);
// this enables that I can use function in a modular way and forego a lot of functions
    fancyRect_Rev (rectx, recty, rectS);
// I can also put in the existing variables


// --------------------------------------------------------
    // Draw two coloured rectangles
    // fancyRect(width / 2, height / 4, 200, 100, "#ceeb87");
    // fancyRect(width / 2, 3 * height / 4, 200, 100, "#ce87eb");

    // Calculate the meaning of life
    // const meaningOfLife = add(21, 21);

    // Display the meaning of life
    //     push();
    //     textSize(64);
    //     textAlign(CENTER, CENTER);
    //     text(meaningOfLife, width / 2, height / 2);
    //     pop();
    }

    // /**
    //  * Adds a and b and returns the result
    //  */
    // function add(a, b) {
    //     const result = a + b;
    //     return result;
    // }

    // /**
    //  * Draws a centered rect with no stroke at the provided position
    //  * with the provided dimensions and fills it with the provided colour
    //  */
    // function fancyRect(x, y, w, h, c) {
    //     push();
    //     rectMode(CENTER);
    //     noStroke();
    //     fill(c);
    //     rect(x, y, w, h);
    //     pop();
    // }
// --------------------------------------------------------

function fancyRect_Rev (tempX, tempY, tempS){
    push ();
    fill ("#ce87eb");
    noStroke();
    rect (tempX, tempY, tempS, tempS);
    pop ();
}

// function fancyRect () {
//     push ();
//     fill ("#ce87eb");
//     noStroke();
//     rect (rectx, recty, rectS, rectS);
//     pop ();
// }

/* if I want to make a second rectangle with different position, what would be the best way to do that? 
we can add parameter for the function! */